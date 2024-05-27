import facebookIconSrc from "./assets/facebook.png";
import tiktokIconSrc from "./assets/tiktok.png";
import xIconSrc from "./assets/x.png";
import youtubeIconSrc from "./assets/youtube.png";
import InstagramIconSrc from "./assets/instagram.png";
import { LinkIconWrapUI, UrlUI } from "./styles";
import { AiFillLock } from "react-icons/ai";
import { MdDelete, MdLink } from "react-icons/md";

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
    <UrlUI>
      <LinkIconWrapUI>
        {platform ? <img width="30px" src={platform?.iconSrc} /> : <MdLink />}
        <p>{link}</p>
      </LinkIconWrapUI>
      <div
        style={{
          paddingRight: "10px",
        }}
      >
        {isLocked && <AiFillLock />}
        {!isLocked && <MdDelete onClick={onDeleteClick} />}
      </div>
    </UrlUI>
  );
};

export default Link;
