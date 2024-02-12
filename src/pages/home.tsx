import React from "react";

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
        <div className="flex flex-col lg:flex-row">
          <p className="lg:w-3/5 text-start text-l leading-loose">
            I'm an Android engineer working at Cash App in San Francisco. I was
            born in Suzhou, China and raised in Vancouver, Canada, where I
            graduated from the University of British Columbia with a major in
            Computer Science and a minor in Psychology. Prior to Cash App, I
            worked on Android at Robinhood and Yelp.
            <br></br>
            When not writing code, I write fiction, usually speculative. My
            short stories have been published in Translunar Travelers Lounge,
            Infinite Worlds, and Luna Station Quarterly.
          </p>
          <div className="lg:w-2/5 justify-center">
            <div className="inline-block relative">
              <img
                src="/assets/profile-pic.png"
                className="mt-12 lg:mt-0 w-48"
              />
              <img
                src="/assets/dotted-border.png"
                className="w-20 absolute top-4 lg:-top-8 -left-8"
              />
              <img
                src="/assets/dotted-border.png"
                className="rotate-180 w-20 absolute -bottom-8 -right-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
