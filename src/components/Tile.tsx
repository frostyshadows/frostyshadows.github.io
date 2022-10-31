import React from 'react';
import CtaButton, { CtaButtonModel } from './CtaButton';

export type TileModel = {
  title: string;
  description: string;
  timestamp?: string;
  ctaButton?: CtaButtonModel
}

export default function Tile(model: TileModel) {
  return (
    <div className="max-w-xl h-64 inline-block justify-start text-start m-4 p-4 relative">
      <img src="/assets/dotted-border.png" className="w-20" />
      <img src="/assets/dotted-border.png" className="rotate-180 w-20 absolute bottom-0 right-0 -mr-4" />
      <div className="absolute top-12 left-12">
        <div className="text-3xl font-serif pb-2">
          <p>{model.title}</p>
        </div>
        <p className="w-4/5 text-start pb-4">
          {model.description}
        </p>
        {
          (model.timestamp != null) ?
            <p className="w-4/5 text-start pb-4 italic">
              {model.timestamp}
            </p> : null
        }
        {
          (model.ctaButton != null) ?
            <div className="pt-4"> {CtaButton(model.ctaButton)} </div> : null
        }
      </div>
    </div>
  )
}