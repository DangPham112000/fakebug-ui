import React from "react";

type ImageEditorType = {
  setIsEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ImageEditor = ({ setIsEditorOpen }: ImageEditorType) => {
  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-black/75 z-10 flex items-center justify-center">
      <div className="relative bg-black rounded-xl p-12 flex flex-col">
        <div
          className="absolute top-2 right-2 bg-black hover:bg-black/50 text-white p-1 px-2 rounded-full font-bold text-sm cursor-pointer"
          onClick={() => {setIsEditorOpen(false)}}
        >
          x
        </div>
      </div>
    </div>
  );
};
