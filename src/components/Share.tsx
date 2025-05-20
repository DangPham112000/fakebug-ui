"use client";

import React, { useRef, useState } from "react";
import { Avatar } from "./Avatar";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import imagekitAuthenticator from "@/helpers/client/imagekitAuthenticator";
import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { ImageEditor } from "./ImageEditor";

export type ImageSettingsType = {
  type: "original" | "wide" | "square";
  sensitive: boolean;
};

export const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const previewMediaUrl = media ? URL.createObjectURL(media) : null;

  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [imageSettings, setImageSettings] = useState<ImageSettingsType>({
    type: "original",
    sensitive: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const abortController = new AbortController();

  const loadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };

  const unloadImage = () => {
    setMedia(null);
  };

  const uploadImage = async () => {
    if (!media) return;

    let authParams;
    try {
      authParams = await imagekitAuthenticator();
    } catch (authError) {
      console.error("Failed to authenticate for upload:", authError);
      return;
    }
    const { signature, expire, token, publicKey } = authParams;

    const transformation = `w-600,${
      imageSettings.type === "square"
        ? "ar-1-1"
        : imageSettings.type === "wide"
        ? "ar-16-9"
        : ""
    }`;

    try {
      const uploadResponse = await upload({
        // Authentication parameters
        expire,
        token,
        signature,
        publicKey,
        file: media,
        fileName: media.name, // Optionally set a custom file name
        folder: "/posts",
        ...(media.type.includes("image") && {
          transformation: {
            pre: transformation,
          },
        }),
        customMetadata: {
          sensitive: imageSettings.sensitive,
        },
        // Abort signal to allow cancellation of the upload if needed.
        abortSignal: abortController.signal,
      });
      console.log("Upload response:", uploadResponse);
      return uploadResponse;
    } catch (error) {
      // Handle specific error types provided by the ImageKit SDK.
      if (error instanceof ImageKitAbortError) {
        console.error("Upload aborted:", error.reason);
      } else if (error instanceof ImageKitInvalidRequestError) {
        console.error("Invalid request:", error.message);
      } else if (error instanceof ImageKitUploadNetworkError) {
        console.error("Network error:", error.message);
      } else if (error instanceof ImageKitServerError) {
        console.error("Server error:", error.message);
      } else {
        // Handle any other errors that may occur.
        console.error("Upload error:", error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;
    const formData = new FormData(form);

    const uploaded = await uploadImage();
    formData.append("fileName", uploaded?.name || "");

    shareAction(formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-4 flex gap-4">
      <Avatar />
      {/* Others */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
          placeholder="What's happening?"
        />
        {/* Preview Image */}
        {media?.type.includes("image") && previewMediaUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewMediaUrl}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                imageSettings.type === "original"
                  ? "h-full object-contain"
                  : imageSettings.type === "square"
                  ? "aspect-square h-auto object-cover"
                  : "aspect-video h-auto object-cover"
              }`}
            />
            <button
              type="button"
              className="absolute top-2 left-2 bg-black hover:bg-black/50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="absolute top-2 right-2 rounded-full h-8 w-8 bg-black/50 text-white cursor-pointer flex items-center justify-center font-bold text-sm"
              onClick={unloadImage}
            >
              x
            </button>
          </div>
        )}
        {media?.type.includes("video") && previewMediaUrl && (
          <div className="relative">
            <video src={previewMediaUrl} controls />
            <button
              type="button"
              className="absolute top-2 right-2 rounded-full h-8 w-8 bg-black/50 text-white cursor-pointer flex items-center justify-center font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </button>
          </div>
        )}
        {isEditorOpen && previewMediaUrl && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            imageSettings={imageSettings}
            setImageSettings={setImageSettings}
            previewImageUrl={previewMediaUrl}
          />
        )}
        {/* Upload Thing Buttons */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              onChange={loadImage}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                className="cursor-pointer"
                path="/icons/image.svg"
                w={20}
                h={20}
                alt=""
              />
            </label>
            <Image
              className="cursor-pointer"
              path="/icons/gif.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/poll.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/emoji.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/schedule.svg"
              w={20}
              h={20}
              alt=""
            />
            <Image
              className="cursor-pointer"
              path="/icons/location.svg"
              w={20}
              h={20}
              alt=""
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black font-bold rounded-full py-2 px-4 cursor-pointer"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
