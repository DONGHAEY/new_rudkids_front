import { IoFishOutline } from "react-icons/io5";
import { IoFishSharp } from "react-icons/io5";
import { LiaBreadSliceSolid } from "react-icons/lia";
import { FaBreadSlice } from "react-icons/fa";
import styled from "styled-components";

export const ShareProgress = ({ sharedCount }) => {
  return (
    <SharedProgressWrapperUI>
      {[
        BreadIconUI,
        BreadIconUI,
        BreadIconUI,
        BreadIconUI,
        BreadIconUI,
        FishIconUI,
        FishIconUI,
      ].map((Icon, idx) => {
        return <Icon key={idx} isPrepared={idx < sharedCount} />;
      })}
    </SharedProgressWrapperUI>
  );
};

const SharedProgressWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const FishIconUI = ({ isPrepared }) => {
  return isPrepared ? <IoFishSharp /> : <IoFishOutline />;
};

const BreadIconUI = ({ isPrepared }) => {
  return isPrepared ? <FaBreadSlice /> : <LiaBreadSliceSolid />;
};
