import React from 'react';

export default function Tech() {
  return (
    <div className="bg-white">
      {TechHeader()}
    </div>
  )
}

function TechHeader() {
  return (
    <div className="bg-indigo-50 p-8">
      <div className="flex text-5xl font-serif pb-12">
        <p>Tech</p>
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