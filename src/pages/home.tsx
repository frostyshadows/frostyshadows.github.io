import React from 'react';

export default function Home() {
  return (
    <div className="h-screen bg-indigo-50 p-8 flex flex-row place-content-center">
      <div className="h-full max-w-7xl py-8 px-2 sm:px-6 lg:px-8">
        <div className="flex text-start text-5xl font-serif pt-12 pb-20">
          <p>Hi, I'm&nbsp;</p>
          <div>
            <p>Sherry</p>
            <div className="h-6 ml-2 -mr-2 -mt-6 bg-indigo-200" />
          </div>
        </div>
        <p className="lg:w-3/5 flex text-start text-l leading-loose">
          I'm an Android engineer working at Cash App.
          I was born in Suzhou, China and raised in Vancouver, Canada,
          where I graduated from the University of British Columbia with
          a major in Computer Science and a minor in Psychology.
          Prior to Cash App, I worked on Android at Robinhood and Yelp.
        </p>
      </div>
    </div>
  )
}
