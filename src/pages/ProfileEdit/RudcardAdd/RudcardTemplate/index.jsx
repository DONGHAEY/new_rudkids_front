import {
  CardDescriptionUI,
  CardTemplateUI,
  ExipiredAtUI,
  IssuedAtUI,
  Order1UI,
  Order2UI,
  ProfileImgUI,
  QrImgUI,
  TextBox,
  TextBox2,
} from "./styles";
import moment from "moment";
import cardSrc from "./assets/card_form.svg";
import "./fonts.css";

const RudcardTemplate = ({
  name,
  birth,
  description,
  order = 9999,
  profileImgUrl,
  qrImgUrl,
  ref,
}) => {
  return (
    <CardTemplateUI ref={ref}>
      <img
        style={{
          display: "flex",
          opacity: 1,
        }}
        src={cardSrc}
      />
      <ProfileImgUI src={profileImgUrl} />
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