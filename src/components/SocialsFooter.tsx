import React from "react";

import IconButton, { IconButtonModel } from "./IconButton";

let instagram: IconButtonModel = {
  linkUrl: "https://www.instagram.com/frostyshadows/",
  iconUrl: "/assets/icon-social-instagram.svg",
};
let linkedIn: IconButtonModel = {
  linkUrl: "https://www.linkedin.com/in/sherry-yuan-375291a2/",
  iconUrl: "/assets/icon-social-linkedin.svg",
};
let medium: IconButtonModel = {
  linkUrl: "https://medium.com/@sherryyuan",
  iconUrl: "/assets/icon-social-medium.svg",
};
let substack: IconButtonModel = {
  linkUrl: "https://sherryyuan.substack.com",
  iconUrl: "/assets/icon-social-substack.svg",
};
let bluesky: IconButtonModel = {
  linkUrl: "https://bsky.app/profile/sherry-xy.bsky.social",
  iconUrl: "/assets/icon-social-bluesky.svg",
};
let github: IconButtonModel = {
  linkUrl: "https://github.com/frostyshadows",
  iconUrl: "/assets/icon-social-github.svg",
};
let redbubble: IconButtonModel = {
  linkUrl: "https://www.redbubble.com/people/frostyshadows/shop?asc=u",
  iconUrl: "/assets/icon-social-store.svg",
};

const socialButtons = [
  instagram,
  linkedIn,
  substack,
  bluesky,
  github,
  redbubble,
];

export default function SocialsFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white pb-2">
      <div className="flex flex-row justify-center items-center gap-6 my-4">
        {socialButtons.map((social) => (
          <div key={social.linkUrl}>{IconButton(social)}</div>
        ))}
      </div>
    </div>
  );
}
