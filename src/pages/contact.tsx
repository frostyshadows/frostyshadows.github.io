
import React from 'react';
import CtaButton, { CtaButtonModel } from '../components/CtaButton';

let linkedIn: CtaButtonModel = {
  ctaText: "LinkedIn",
  ctaLink: "https://www.linkedin.com/in/sherry-yuan-375291a2/",
  backgroundColor: "#1d4ed8"
}
let medium: CtaButtonModel = {
  ctaText: "Medium",
  ctaLink: "https://medium.com/@sherryyuan",
  backgroundColor: "#0f766e"
}

let instagram: CtaButtonModel = {
  ctaText: "Instagram",
  ctaLink: "https://www.instagram.com/frostyshadows/",
  backgroundColor: "#be185d"
}
let github: CtaButtonModel = {
  ctaText: "Github",
  ctaLink: "https://github.com/frostyshadows",
  backgroundColor: "#3f3f46"
}
let redbubble: CtaButtonModel = {
  ctaText: "Redbubble",
  ctaLink: "https://www.redbubble.com/people/frostyshadows/shop?asc=u",
  backgroundColor: "#b91c1c"
}

const contactButtons = [
  linkedIn,
  medium,
  instagram,
  github,
  redbubble,
]

export default function Contact() {
  return (
    <div className="bg-white pb-8">
      {ContactHeader()}

      <div className="grid grid-cols-1 items-start my-8">
        {contactButtons.map((contact) => (
          <div className="items-center text-center m-2 p-2">
            {CtaButton(contact)}
          </div>
        ))
        }
      </div>
    </div>
  )
}

function ContactHeader() {
  return (
    <div className="bg-indigo-50 p-8 flex flex-row place-content-center">
      <div className="max-w-7xl w-4/5 flex text-l text-start px-2 sm:px-6 lg:px-8">
        <div className="flex text-5xl font-serif pb-12">
          <p>Contact</p>
        </div>
      </div>
    </div>
  )
}