import { useEffect, useState } from "react";
import { AddBtnUI, LinkWrapperUI } from "./styles";
import { Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";

const SocialLinks = ({ value }) => {
  const max = 10;
  const [profileLinks, setProfileLinks] = useState([]);

  useEffect(() => {
    setProfileLinks(value);
  }, [value]);

  const canAdd = profileLinks?.length <= max;

  const deleteHandler = (profileLink) => {
    setProfileLinks(
      profileLinks?.filter((profileLink_) => profileLink_ !== profileLink)
    );
  };

  return (
    <LinkWrapperUI>
      {profileLinks?.map((profileLink) => {
        return (
          <Link onClick={() => deleteHandler(profileLink)} link={profileLink} />
        );
      })}
      {canAdd && (
        <AddBtnUI>
          <GrAdd />
        </AddBtnUI>
      )}
    </LinkWrapperUI>
  );
};

export default SocialLinks;
