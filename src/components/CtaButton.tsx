import React from 'react';
import { Button } from "@material-tailwind/react";

export type CtaButtonModel = {
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
}

export default function CtaButton(model: CtaButtonModel) {
  let backgroundColor = model.backgroundColor ? ("bg-" + model.backgroundColor) : "bg-gray-900"
  let borderColor = model.backgroundColor ? ("border-" + model.backgroundColor) : "border-gray-900"
  return (
    <div className="inline-block">
      <Button className={backgroundColor + " text-white px-8 py-2"} >
        <a href={model.ctaLink} target="_blank" rel="noopener noreferrer">
          {model.ctaText}
        </a>
      </Button>
      <div className={borderColor + " h-9 ml-1 -mr-1 -mt-8 border-2"} />
    </div>
  )
}