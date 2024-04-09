import { useParams } from "react-router-dom";
import { useEffect } from "react";

const serverUrl = "http://localhost:3000";
const PlatformTypes = "instagram";

const CallbackPage = () => {
  const params = useParams();
  const platform = params.platform;

  useEffect(() => {
    if (PlatformTypes.includes(platform)) {
      //   window.location.href = `${serverUrl}/auth/${platform}/callback${window.location.search}`;
    }
  }, [platform]);

  return "리디렉션중...";
};

export default CallbackPage;
