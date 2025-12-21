import React from "react";

export type IconButtonModel = {
  linkUrl: string;
  iconUrl: string;
};

export default function IconButton(model: IconButtonModel) {
  return (
    <a
      href={model.linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center p-2 rounded-md transition-all duration-200 w-6 h-6 bg-black hover:bg-indigo-600"
      aria-label="Social media link"
      style={{
        WebkitMaskImage: `url(${model.iconUrl})`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage: `url(${model.iconUrl})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
