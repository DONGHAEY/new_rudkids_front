import facebookIconSrc from "./assets/facebook.png";
import tiktokIconSrc from "./assets/tiktok.png";
import xIconSrc from "./assets/x.png";
import youtubeIconSrc from "./assets/youtube.png";
import InstagramIconSrc from "./assets/instagram.png";
import { CgLink } from "react-icons/cg";
import { LinkBoxUI, LinkNmTextUI } from "./Link/styles";

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

const Link = ({ link = "" }) => {
  // const [navigatePopup] = usePopup();
  const platform = platforms.find((platform) => link.includes(platform.domain));
  const onClick = () => {
    // navigatePopup(`webview=${link}`);
    window.open(link, "other_platform");
  };

  const nme = useMemo(() => {
    if (!platform) return "link";
    let link_ = link.replace("https://", "");
    link_ = link_.replace("http://", "");
    link_ = link_.replace(platform.domain, "");
    const contents = link_.split("/");
    return contents?.[1];
  }, [platform]);

  return (
    <LinkBoxUI onClick={onClick}>
      {platform?.iconSrc ? (
        <img src={platform?.iconSrc} height="14px" />
      ) : (
        <CgLink />
      )}
      <LinkNmTextUI>{nme ?? "link"}</LinkNmTextUI>
      {/* <Popup popupName={`webview=${link}`}>
        <iframe
          sandbox="allow-scripts allow-same-origin"
          src={link}
          width={"100%"}
          height={"100%"}
          allowfullscreen
        ></iframe>
      </Popup> */}
    </LinkBoxUI>
  );
};

export default Link;
