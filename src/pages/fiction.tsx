import React from 'react';
import { CtaButtonModel } from '../components/CtaButton';
import Tile, { TileModel } from '../components/Tile'

let externalProcessorsCta: CtaButtonModel = {
  ctaText: "read it",
  ctaLink: "https://lunastationquarterly.com/story/external-processors/",
}
let externalProcessors: TileModel = {
  title: "External Processors",
  description: "A near future where people can purchase additional brain processing power through an app. ",
  timestamp: "Luna Station Quarterly Issue #051 (Fall 2022)",
  ctaButton: externalProcessorsCta,
}
let memoriesInAmberCta: CtaButtonModel = {
  ctaText: "get a copy",
  ctaLink: "https://www.infiniteworldsmagazine.com/store/p/infinite-worlds-8-direct-edition-pre-order",
}
let memoriesInAmber: TileModel = {
  title: "Memories In Amber",
  description: "A race against time to fix a bug in a widely-used memory aide device",
  timestamp: "Infinite Worlds Issue #8 (Summer 2021)",
  ctaButton: memoriesInAmberCta,
}


let lsqInterviewCta: CtaButtonModel = {
  ctaText: "read it",
  ctaLink: "https://lunastationquarterly.com/issue-051-author-interview-sherry-yuan-and-external-processors/",
}
let lsqInterview: TileModel = {
  title: "Luna Station Quarterly Interview",
  description: "Talking about the ideas behind External Processors",
  timestamp: "Fall 2022",
  ctaButton: lsqInterviewCta,
}

const stories = [
  externalProcessors,
  memoriesInAmber,
  lsqInterview,
]



export default function Fiction() {
  return (
    <div className="bg-white">
      {FictionHeader()}

      <div className="flex-wrap items-start">
        {stories.map((story) => (
          Tile(story)
        ))
        }
      </div>
    </div>
  )
}

function FictionHeader() {
  return (
    <div className="bg-indigo-50 p-8">
      <div className="flex text-5xl font-serif pb-12">
        <p>Fiction</p>
      </div>
      <p className="w-3/5 flex text-l text-start leading-loose">
        I'm an Android engineer working at Cash App.
        I was born in Suzhou, China and raised in Vancouver, Canada,
        where I graduated from the University of British Columbia with
        a major in Computer Science and a minor in Psychology.
        Prior to Cash App, I worked on Android at Robinhood and Yelp.
      </p>
    </div>
  )
}