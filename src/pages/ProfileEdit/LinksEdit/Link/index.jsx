import facebookIconSrc from "./assets/facebook.png";
import tiktokIconSrc from "./assets/tiktok.png";
import xIconSrc from "./assets/x.png";
import youtubeIconSrc from "./assets/youtube.png";
import InstagramIconSrc from "./assets/instagram.png";
import { LinkIconWrapUI, UrlTxtUI, UrlUI } from "./styles";
import { MdLink } from "react-icons/md";

import lockerSrc from "./assets/locker.svg";
import deleteSrc from "./assets/delete.svg";

const platforms = [
  {
    name: "facebook",
    domain: "www.facebook.com",
    iconSrc: facebookIconSrc,
  },
  {
    name: "tiktok",
    domain: "www.tiktok.com",
    iconSrc: tiktokIconSrc,
  },
  {
    name: "x",
    domain: "twitter.com",
    iconSrc: xIconSrc,
  },
  {
    name: "youtube",
    domain: "www.youtube.com",
    iconSrc: youtubeIconSrc,
  },
  {
    name: "instagram",
    domain: "www.instagram.com",
    iconSrc: InstagramIconSrc,
  },
];

const Link = ({ isLocked, link, onDeleteClick }) => {
  const platform = platforms.find((platform) => link.includes(platform.domain));
  return (
    <UrlUI $locked={isLocked}>
      <LinkIconWrapUI>
        {platform ? <img width="30px" src={platform?.iconSrc} /> : <MdLink />}
        <UrlTxtUI>{link}</UrlTxtUI>
      </LinkIconWrapUI>
      <div
        style={{
          paddingRight: "10px",
        }}
      >
        {isLocked && <img src={lockerSrc} height="100%" />}
        {!isLocked && (
          <img src={deleteSrc} height="100%" onClick={onDeleteClick} />
        )}
      </div>
    </UrlUI>
  );
};

export default Link;
