
import React from 'react';
import CtaButton, { CtaButtonModel } from '../components/CtaButton';

let linkedIn: CtaButtonModel = {
  ctaText: "LinkedIn",
  ctaLink: "https://www.linkedin.com/in/sherry-yuan-375291a2/",
  backgroundColor: "blue-700"
}
let github: CtaButtonModel = {
  ctaText: "Github",
  ctaLink: "https://github.com/frostyshadows",
  backgroundColor: "zinc-700"
}
let medium: CtaButtonModel = {
  ctaText: "Medium",
  ctaLink: "https://medium.com/@sherryyuan",
  backgroundColor: "teal-700"
}

let instagram: CtaButtonModel = {
  ctaText: "Instagram",
  ctaLink: "https://www.instagram.com/frostyshadows/",
  backgroundColor: "pink-700"
}
let twitter: CtaButtonModel = {
  ctaText: "Twitter",
  ctaLink: "https://twitter.com/sherry_xy_yuan",
  backgroundColor: "sky-700"
}

const contactButtons = [
  linkedIn,
  github,
  medium,
  instagram,
  twitter,
]

export default function Contact() {
  return (
    <div className="bg-white pb-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 items-start">
        {contactButtons.map((contact) => (
          <div className="flex-wrap items-center text-center m-4 p-4">
            {CtaButton(contact)}
          </div>
        ))
        }
      </div>
    </div>
  )
}