import React from 'react';


export default function ListLink(linkText: string, linkUrl: string) {
  return (
    <div className="inline-flex px-2 py-1 justify-start text-start">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-600">
        • {linkText}
      </a>
    </div>
  )
}
