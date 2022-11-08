import React from 'react';

export type LinkWithIconModel = {
  linkText: string;
  linkUrl: string;
  icon: string;
}

export default function ExternalLinkWithIcon(model: LinkWithIconModel) {
  return (
    <div className="inline-flex p-2 justify-start text-start underline hover:text-indigo-600">
      <img src={model.icon} className="w-6 mr-2" />
      <a href={model.linkUrl} target="_blank" rel="noopener noreferrer">
        {model.linkText}
      </a>
    </div>
  )
}