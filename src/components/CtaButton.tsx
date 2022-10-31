import React from 'react';
import { Button } from "@material-tailwind/react";

export type CtaButtonModel = {
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
}

export default function CtaButton(model: CtaButtonModel) {
  let btnColor = model.backgroundColor ?? "#111827"
  return (
    <div className="inline-block">
      <Button className="w-60 text-white font-medium px-8 py-2" style={{ backgroundColor: btnColor }} >
        <a href={model.ctaLink} target="_blank" rel="noopener noreferrer">
          {model.ctaText}
        </a>
      </Button>
      <div className="h-9 ml-1 -mr-1 -mt-8 border-2" style={{ borderColor: btnColor }} />
    </div>
  )
}