import FindInsta from "./FindInsta";
import { useState } from "react";
import FindedInsta from "./FindedInsta";
import SetInsta from "./SetInsta";
import { useSearchParams } from "react-router-dom";

const InstaInfoPage = () => {
  const [findedInstaInfo, setFindedInstaInfo] = useState(null);
  const [isSetting, setIsSetting] = useState(false);
  const [searchParams] = useSearchParams();
  const callback = searchParams.get("callback") ?? "/";

  if (isSetting) {
    return (
      <SetInsta
        instaId={findedInstaInfo.instaId}
        instaImgUrl={findedInstaInfo.instaImgUrl}
        onComplete={() => {
          window.location.href = callback;
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
