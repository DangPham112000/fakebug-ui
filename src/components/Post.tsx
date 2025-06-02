import Image from './Image';
import { PostMoreAction } from './PostMoreAction';
import { PostInteraction } from './PostInteraction';
import { Avatar } from './Avatar';
import imagekitGetFileDetails from '@/helpers/server/imagekitGetFileDetails';
import Video from './Video';
import Link from 'next/link';
import { format } from 'timeago.js';

type Props = {
  type?: 'status' | 'comment';
  post?: any;
};

export const Post = ({ type, post }: Props) => {
  const isStatusPost = type === 'status';

  const originalPost = post?.rePostId ? post?.rePost : post;

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* Repost */}
      {post?.rePostId && (
        <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span>{post?.user?.displayName} reposted</span>
        </div>
      )}
      {/* Post */}
      <div className="flex gap-4">
        {/* Avatar */}
        {!isStatusPost && <Avatar path={originalPost?.user?.img} />}

        {/* Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Head */}
          <div className="w-full flex justify-between">
            <Link
              href={`/${originalPost?.user?.account?.username}`}
              className="flex items-center gap-4"
            >
              {isStatusPost && <Avatar path={originalPost?.user?.img} />}
              <div
                className={`flex flex-wrap ${
                  isStatusPost
                    ? 'flex-col gap-0 items-start'
                    : 'items-center gap-2'
                }`}
              >
                <h1 className="text-md font-bold">
                  {originalPost?.user?.displayName}
                </h1>
                <span className={`text-textGray ${isStatusPost && 'text-sm'}`}>
                  @{originalPost?.user?.account?.username}
                </span>
                {!isStatusPost && (
                  <span className="text-textGray">
                    {format(originalPost?.createdAt)}
                  </span>
                )}
              </div>
            </Link>
            <PostMoreAction />
          </div>

          {/* Text & Media */}
          <Link
            href={`/${originalPost?.user?.account?.username}/status/${originalPost?.id}`}
          >
            <p className={`${isStatusPost && 'text-lg'}`}>{post?.desc}</p>
          </Link>

          {/* {fileDetails &&
            (fileDetails.fileType === 'image' ? (
              <Image
                path={fileDetails.filePath}
                w={fileDetails.width}
                h={fileDetails.height}
                className={
                  fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''
                }
                alt=""
              />
            ) : (
              <Video
                path={fileDetails?.filePath}
                className={
                  fileDetails.customMetadata?.sensitive ? 'blur-lg' : ''
                }
              />
            ))} */}

          {isStatusPost && (
            <span className="text-textGray">{originalPost?.createdAt}</span>
          )}

          <PostInteraction count={originalPost?._count} />
        </div>
      </div>
    </div>
  );
};
