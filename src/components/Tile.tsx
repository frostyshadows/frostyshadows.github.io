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
    <div className="max-w-xl inline-block justify-start text-start m-12 p-4 relative">
      <img src="/assets/dotted-border.png" className="w-24" />
      <div className="absolute top-12 left-12">
        <div className="text-3xl font-serif pb-2">
          <p>{model.title}</p>
        </div>
        <p className="w-4/5text-start pb-4">
          {model.description}
        </p>
        {
          (model.timestamp != null) ?
            <p className="w-4/5text-start pb-4 italic">
              {model.timestamp}
            </p> : null
        }
        {
          (model.ctaButton != null) ?
            CtaButton(model.ctaButton) : null
        }
      </div>
    </div>
  )
}