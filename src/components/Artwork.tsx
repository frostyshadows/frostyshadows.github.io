import React from "react";

export type ArtworkModel = {
  imageUrl: string;
  title: string;
  materials: string;
  details?: React.ReactNode;
};

export default function Artwork({
  model,
  onClick,
}: {
  model: ArtworkModel;
  onClick: () => void;
}) {
  return (
    <div
      className="m-4 flex flex-col items-center text-center cursor-pointer group"
      onClick={onClick}
    >
      <div className="overflow-hidden w-full">
        <img
          src={model.imageUrl}
          alt={model.title}
          className="aspect-square w-full object-cover transition-transform duration-200 group-hover:scale-[1.01]"
        />
      </div>
      <p className="pt-2 font-serifAlt text-xl">{model.title}</p>
    </div>
  );
}
