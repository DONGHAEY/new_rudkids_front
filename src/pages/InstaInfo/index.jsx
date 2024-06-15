import FindInsta from "./FindInsta";
import { useState } from "react";
import FindedInsta from "./FindedInsta";
import SetInsta from "./SetInsta";
import { useNavigate, useSearchParams } from "react-router-dom";
import useUserQuery from "../../queries/user/useUserQuery";

const InstaInfoPage = () => {
  const navigate = useNavigate();
  const { data: userData } = useUserQuery();
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
          if (!userData?.isFirstInviteFinished) {
            navigate("/first-invite");
          } else {
            window.location.href = callback;
          }
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
