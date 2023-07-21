'use client'
import { useState } from "react";
import { LinkIcon } from '@heroicons/react/20/solid'

export default function ShareLinkButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        console.log('share link button clicked')
        setClicked(true);
        setTimeout(() => setClicked(false), 1500)
    }

  return (
    <button onClick={handleClick} className="border flex gap=1  items-center px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-500 hover:text-slate-700">
      <LinkIcon className="w-6 h-6" />
      {clicked ? 'Link copied' : 'Share Link'}
    </button>
  );
}
