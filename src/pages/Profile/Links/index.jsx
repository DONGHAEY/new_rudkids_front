import { LinkUI, LinksScrollerUI } from "./styles";
import facebookIconSrc from "./assets/facebook.png";
import tiktokIconSrc from "./assets/tiktok.png";
import xIconSrc from "./assets/x.png";
import youtubeIconSrc from "./assets/youtube.png";
import InstagramIconSrc from "./assets/instagram.png";
import { BsLink } from "react-icons/bs";

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

const Links = ({ links }) => {
  return (
    <LinksScrollerUI>
      {links?.map((link) => {
        const platform = platforms.find((platform) =>
          link.includes(platform.domain)
        );
        return (
          <LinkUI href={link}>
            {platform?.iconSrc ? (
              <img src={platform.iconSrc} width="55%" />
            ) : (
              <BsLink fontSize={"30px"} color="black" />
            )}
          </LinkUI>
        );
      })}
    </LinksScrollerUI>
  );
};

export default Links;
