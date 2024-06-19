import {
  CardDescriptionUI,
  CardTemplateUI,
  ExipiredAtUI,
  IssuedAtUI,
  Order1UI,
  Order2UI,
  ProfileImgUI,
  ProfileImgWrapperUI,
  QrImgUI,
  TextBox,
  TextBox2,
} from "./styles";
import moment from "moment";
import cardSrc from "./assets/card_form.webp";
import "./fonts.css";
import { useEffect, useRef } from "react";

const RudcardTemplate = ({
  name,
  birth,
  description,
  order,
  profileImgUrl,
  qrImgUrl,
  onLoaded,
}) => {
  const ref = useRef();

  //
  useEffect(() => {
    onLoaded(ref);
  }, []);

  return (
    <CardTemplateUI ref={ref}>
      <img width="100%" src={cardSrc} />
      <ProfileImgWrapperUI>
        <ProfileImgUI src={profileImgUrl} />
      </ProfileImgWrapperUI>
      <QrImgUI src={qrImgUrl} />
      <TextBox>{name}</TextBox>
      <TextBox2>
        {birth?.year}.{birth?.month}.{birth?.date}
      </TextBox2>
      <CardDescriptionUI>{description}</CardDescriptionUI>
      <IssuedAtUI>{moment().format("DD MMM YY")}</IssuedAtUI>
      <ExipiredAtUI>{moment().add("3", "M").format("DD MMM YY")}</ExipiredAtUI>
      <Order1UI>No.{order}</Order1UI>
      <Order2UI>{order}</Order2UI>
    </CardTemplateUI>
  );
};

export default RudcardTemplate;
