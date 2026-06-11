import React, { useEffect, useState } from "react";
import Artwork, { ArtworkModel } from "../components/Artwork";

let discoMoon: ArtworkModel = {
  imageUrl: "/assets/artwork/disco-moon.PNG",
  title: "Disco Moon",
  materials: "Acrylic",
  details: "Sour Cherry Art Show (2026)",
};

let amcMagic: ArtworkModel = {
  imageUrl: "/assets/artwork/amc-magic.PNG",
  title: "We Come to This Place for Magic",
  materials: "Digital",
  details: (
    <>
      Prints available on{" "}
      <a
        href="https://www.redbubble.com/shop/ap/165484710"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-700"
      >
        Redbubble
      </a>
    </>
  ),
};

let tinFish: ArtworkModel = {
  imageUrl: "/assets/artwork/tin-fish.jpeg",
  title: "Tinned Fish",
  materials: "Acrylic",
  details: "Sour Cherry Art Show (2025)",
};

let squircle: ArtworkModel = {
  imageUrl: "/assets/artwork/squircle.PNG",
  title: "Squircle",
  materials: "Digital",
  details: "sf frens zine 2 (2024)",
};

let monkeyKing: ArtworkModel = {
  imageUrl: "/assets/artwork/monkey-king.PNG",
  title: "Mountains and Seas",
  materials: "Acrylic",
  details: (
    <>
      SF Opera's{" "}
      <a
        href="https://www.instagram.com/p/DR51Ga9DzRk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-700"
      >
        Monkey King Exhibit
      </a>{" "}
      (2026)
    </>
  ),
};

let madrone: ArtworkModel = {
  imageUrl: "/assets/artwork/madrone.PNG",
  title: "SF is Not Dead",
  materials: "Digital",
  details: (
    <>
      Madrone Art Bar's{" "}
      <a
        href="https://www.sfgate.com/sf-culture/article/madrone-art-bar-anti-doom-loop-shirt-print-18535001.php"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-700"
      >
        anti-doom loop merch
      </a>{" "}
      (2023)
    </>
  ),
};

let seaToSky: ArtworkModel = {
  imageUrl: "/assets/artwork/sea-to-sky.PNG",
  title: "Sea to Sky",
  materials: "Digital",
};

let victorianHouse: ArtworkModel = {
  imageUrl: "/assets/artwork/victorian-house.jpeg",
  title: "Victorian House",
  materials: "Watercolor",
  details: "Sour Cherry Art Show (2025)",
};

let daenerys: ArtworkModel = {
  imageUrl: "/assets/artwork/danaerys.JPG",
  title: "Daenerys",
  materials: "Graphite pencil",
};

let ennui: ArtworkModel = {
  imageUrl: "/assets/artwork/ennui.PNG",
  title: "Ennui",
  materials: "Digital",
};

let flowerface: ArtworkModel = {
  imageUrl: "/assets/artwork/flowerface.png",
  title: "Flowerface",
  materials: "Digital",
};

let hauntedHouse: ArtworkModel = {
  imageUrl: "/assets/artwork/haunted-house.JPG",
  title: "Escape Room",
  materials: "Digital",
};

let loseYourself: ArtworkModel = {
  imageUrl: "/assets/artwork/lose-yourself.jpg",
  title: "Lose Yourself",
  materials: "Graphite pencil",
  details: "IB Art Show (2014)",
};

let newYearNewMe: ArtworkModel = {
  imageUrl: "/assets/artwork/new-year-new-me.PNG",
  title: "New Year New Me",
  materials: "Digital",
  details: "Sour Cherry Art Show (2023)",
};

let proximity: ArtworkModel = {
  imageUrl: "/assets/artwork/proximity.PNG",
  title: "Proximity",
  materials: "Digital",
  details: 'Album art for Zack Kysar\'s single "Proximity"',
};

let yearOfTheRabbit: ArtworkModel = {
  imageUrl: "/assets/artwork/rabbit.PNG",
  title: "Year of the Rabbit",
  materials: "Digital",
  details: "Lunar Art Exhibition (2023)",
};

let rabbithole: ArtworkModel = {
  imageUrl: "/assets/artwork/rabbithole.jpg",
  title: "Down the Rabbit Hole",
  materials: "Digital",
};

let rites: ArtworkModel = {
  imageUrl: "/assets/artwork/rites.PNG",
  title: "Rites of Spring",
  materials: "Digital",
};

let chester: ArtworkModel = {
  imageUrl: "/assets/artwork/chester.JPG",
  title: "Chester Bennington",
  materials: "Graphite pencil",
};

let reflections: ArtworkModel = {
  imageUrl: "/assets/artwork/afterimage.jpeg",
  title: "Reflections",
  materials: "Watercolor",
};

let wildflower: ArtworkModel = {
  imageUrl: "/assets/artwork/wildflower.PNG",
  title: "Wildflowers",
  materials: "Digital",
};

const artworks = [
  discoMoon,
  amcMagic,
  tinFish,
  squircle,
  monkeyKing,
  madrone,
  seaToSky,
  victorianHouse,
  daenerys,
  ennui,
  flowerface,
  hauntedHouse,
  loseYourself,
  newYearNewMe,
  proximity,
  yearOfTheRabbit,
  rabbithole,
  rites,
  chester,
  reflections,
  wildflower,
];

export default function Art() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((i) => (i! > 0 ? i! - 1 : artworks.length - 1));
      if (e.key === "ArrowRight")
        setSelectedIndex((i) => (i! < artworks.length - 1 ? i! + 1 : 0));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <div className="bg-white pb-8">
      {ArtHeader()}

      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {artworks.map((artwork, i) => (
            <Artwork
              key={artwork.imageUrl}
              model={artwork}
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            className="fixed top-4 right-6 text-2xl text-gray-400 hover:text-gray-700 z-10"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>

          {/* Prev arrow */}
          <button
            className="fixed left-6 text-gray-400 hover:text-gray-700 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((i) => (i! > 0 ? i! - 1 : artworks.length - 1));
            }}
          >
            {"<"}
          </button>

          <div
            className="w-[80vw] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={artworks[selectedIndex].imageUrl}
              alt={artworks[selectedIndex].title}
              className="w-full object-contain max-h-[70vh]"
            />

            <div className="bg-white px-6 py-4 mt-4 text-left">
              <p className="font-serifAlt text-2xl">
                {artworks[selectedIndex].title}
              </p>
              {artworks[selectedIndex].details && (
                <p className="mt-2 text-sm">
                  {artworks[selectedIndex].details}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-500">
                {artworks[selectedIndex].materials}
              </p>
            </div>
          </div>

          {/* Next arrow: */}
          <button
            className="fixed right-6 text-gray-400 hover:text-gray-700 text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((i) => (i! < artworks.length - 1 ? i! + 1 : 0));
            }}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}

function ArtHeader() {
  return (
    <div className="w-full bg-indigo-50 p-8 flex flex-row place-content-center">
      <div className="w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex text-5xl font-serif pb-12">
          <p>Art</p>
        </div>
        <p className="lg:w-4/5 text-l text-start">The surreal and the weird.</p>
        <p className="lg:w-4/5 text-l text-start">
          For commissions or collaborations, please contact me at{" "}
          <b>sherry.xy.yuan@gmail.com</b>.
        </p>
      </div>
    </div>
  );
}
