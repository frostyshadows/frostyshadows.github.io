
import React from 'react';
import CtaButton, { CtaButtonModel } from '../components/CtaButton';

let linkedIn: CtaButtonModel = {
  ctaText: "LinkedIn",
  ctaLink: "https://www.linkedin.com/in/sherry-yuan-375291a2/",
  backgroundColor: "#1d4ed8"
}
let github: CtaButtonModel = {
  ctaText: "Github",
  ctaLink: "https://github.com/frostyshadows",
  backgroundColor: "#3f3f46"
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
let twitter: CtaButtonModel = {
  ctaText: "Twitter",
  ctaLink: "https://twitter.com/sherry_xy_yuan",
  backgroundColor: "#0369a1"
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