import React from 'react';
import ListText from '../components/ListText';
import ListLink from '../components/ListLink';

export default function Inspiration() {
  return (
    <div className="bg-white pb-8">
      {InspirationHeader()}
      <div className="grid-cols-1 sm:grid-cols-2 max-w-7xl mx-auto grid py-8">
        {Fiction()}
        {Nonfiction()}
        {Shows()}
        {Movies()}
        {Misc()}
      </div>
    </div>
  )
}

function InspirationHeader() {
  return (
    <div className="bg-indigo-50 p-8 flex flex-row place-content-center">
      <div className="max-w-7xl w-4/5 flex text-l text-start px-2 sm:px-6 lg:px-8">
        <div className="flex text-5xl font-serif pb-12">
          <p>Inspiration</p>
        </div>
      </div>
    </div>
  )
}

function Fiction() {
  return (
    <div className="pt-8 mx-4">
      <div className="flex text-4xl font-serif pb-4">
        <div>
          <p>Fiction Books</p>
          <div className="h-4 ml-2 -mr-2 -mt-4 bg-indigo-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 items-start">
        {ListText("The Magicians, Lev Grossman")}
        {ListText("Never Let Me Go, Kazuo Ishiguro")}
        {ListText("A Little Life, Hanya Yanagihara")}
        {ListText("Exhalation, Ted Chiang")}
        {ListText("It, Stephen King")}
        {ListText("Oryx and Crake, Margaret Atwood")}
        {ListText("Jonathan Strange & Mr. Norrell, Susanna Clarke")}
        {ListText("Looking for Alaska, John Green")}
        {ListText("The Hunger Games, Suzanne Collins")}
        {ListText("A Series of Unfortunate Events, Lemony Snicket")}
      </div>
    </div>
  )
}

function Nonfiction() {
  return (
    <div className="pt-8 mx-4">
      <div className="flex text-4xl font-serif pb-4">
        <div>
          <p>Nonfiction Books</p>
          <div className="h-4 ml-2 -mr-2 -mt-4 bg-indigo-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 items-start">
        {ListText("Caste, Isabel Wilkerson")}
        {ListText("Hidden Valley Road, Robert Kolker")}
        {ListText("A Swim in a Pond in the Rain, George Saunders")}
        {ListText("Consider This, Chuck Palahniuk")}
        {ListText("Dare to Lead, Brene Brown")}
        {ListText("The Design of Everyday Things, Donald A. Norman")}
        {ListText("Educated, Tara Westover")}
        {ListText("Steve Jobs, Isaacson Walter")}
        {ListText("The Glass Castle, Jeannette Walls")}
      </div>
    </div>
  )
}

function Shows() {
  return (
    <div className="pt-8 mx-4">
      <div className="flex text-4xl font-serif pb-4">
        <div>
          <p>Shows</p>
          <div className="h-4 ml-2 -mr-2 -mt-4 bg-indigo-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 items-start">
        {ListText("Code Geass")}
        {ListText("The Boys")}
        {ListText("Bojack Horseman")}
        {ListText("Game of Thrones")}
        {ListText("Black Mirror")}
        {ListText("The Office")}
        {ListText("Fullmetal Alchemist")}
        {ListText("Death Note")}
      </div>
    </div>
  )
}

function Movies() {
  return (
    <div className="pt-8 mx-4">
      <div className="flex text-4xl font-serif pb-4">
        <div>
          <p>Movies</p>
          <div className="h-4 ml-2 -mr-2 -mt-4 bg-indigo-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 items-start">
        {ListText("Everything Everywhere All At Once")}
        {ListText("Interstellar")}
        {ListText("The Dark Knight")}
        {ListText("The Prestige")}
        {ListText("Memento")}
        {ListText("Mad Max: Fury Road")}
        {ListText("Doctor Strange")}
      </div>
    </div>
  )
}

function Misc() {
  return (
    <div className="pt-8 mx-4">
      <div className="flex text-4xl font-serif pb-4">
        <div>
          <p>Miscellaneous</p>
          <div className="h-4 ml-2 -mr-2 -mt-4 bg-indigo-200" />
        </div>
      </div>
      <div className="grid grid-cols-1 items-start">
        {ListLink(
          "The Woks of Life",
          "https://thewoksoflife.com/",
        )}
        {ListLink(
          "We Become What We Behold",
          "https://ncase.itch.io/wbwwb",
        )}
        {ListLink(
          "Danger Days: The True Lives of the Fabulous Killjoys by My Chemical Romance",
          "https://open.spotify.com/album/2wPnKggTK3QhYAKL7Q0vvr",
        )}
        {ListLink(
          "Yuumei / Wenqing Yan",
          "https://www.instagram.com/yuumeiart/",
        )}
      </div>
    </div>
  )
}