import FindInsta from "./FindInsta";
import { useState } from "react";
import FindedInsta from "./FindedInsta";
import SetInsta from "./SetInsta";

const InstaInfoPage = () => {
  //
  const [findedInstaInfo, setFindedInstaInfo] = useState(null);
  const [isSetting, setIsSetting] = useState(false);

  if (isSetting) {
    return (
      <SetInsta
        instaId={findedInstaInfo.instaId}
        instaImgUrl={findedInstaInfo.instaImgUrl}
        onComplete={() => {
          window.location.href = "/";
        }}
      />
    );
  }

  if (findedInstaInfo) {
    return (
      <FindedInsta
        instaId={findedInstaInfo.instaId}
        instaImgUrl={findedInstaInfo.instaImgUrl}
        onCancel={() => setFindedInstaInfo(null)}
        onSelect={() => setIsSetting(true)}
      />
    );
  }

  return <FindInsta setFindedInstaInfo={setFindedInstaInfo} />;
};

export default InstaInfoPage;
