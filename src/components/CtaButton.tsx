import React from 'react';
import { Button } from "@material-tailwind/react";

export type CtaButtonModel = {
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
}

export default function CtaButton(model: CtaButtonModel) {
  return (
    <div className="inline-block">
      {/* TODO: handle background color */}
      <Button className="bg-gray-900 text-white px-8 py-2">
        <a href={model.ctaLink} target="_blank" rel="noopener noreferrer">
          {model.ctaText}
        </a>
      </Button>
      <div className="h-9 ml-1 -mr-1 -mt-8 border-2 border-gray-900" />
    </div>
  )
}