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
    <div className="inline-block justify-start text-start p-8">
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
  )
}