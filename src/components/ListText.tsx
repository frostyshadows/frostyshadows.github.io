import React from 'react';


export default function ListText(text: string) {
  return (
    <div className="inline-flex px-2 py-1 justify-start text-start">
      • {text}
    </div>
  )
}