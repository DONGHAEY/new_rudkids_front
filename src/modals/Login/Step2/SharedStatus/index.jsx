import {
  CircleImgUI,
  CircleImgWrapperUI,
  ShareStatusTextUI,
  SharedStatusUI,
} from "./styles";
import emptyFriendSrc from "./assets/empty_friend.png";

import friend1 from "./assets/1.png";
import friend2 from "./assets/2.png";
import friend3 from "./assets/3.png";

const frinedImgSrcList = [friend1, friend2, friend3];

export const SharedStatus = ({ isShared, idx, active, onClick }) => {
  const NotSharedImg = (
    <CircleImgUI alt={"empty_friend.png"} src={emptyFriendSrc} />
  );

  const SharedImg = (
    <CircleImgUI alt={`${idx + 1}.png`} src={frinedImgSrcList[idx]} />
  );

  const canShareClick = active && !isShared;
  const clickHandler = (e) => {
    if (canShareClick) {
      if (typeof onClick === "function") {
        onClick();
      }
    } else {
      if (isShared) {
        alert("ah.. Don't Hit Me.... ay..");
      } else {
        alert("Nock Nock..!");
      }
    }
  };

  return (
    <SharedStatusUI>
      <CircleImgWrapperUI
        $active={canShareClick}
        onClick={clickHandler}
        children={!isShared ? NotSharedImg : SharedImg}
      />
      <ShareStatusTextUI $isShared={isShared}>
        {isShared ? "invited" : "not invited"}
      </ShareStatusTextUI>
    </SharedStatusUI>
  );
};
