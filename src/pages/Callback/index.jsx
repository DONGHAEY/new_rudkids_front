import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const serverUrl = "http://localhost:3000";
const PlatformTypes = ["instagram"];

const CallbackPage = () => {
  const params = useParams();
  const platform = params.platform;

  useEffect(() => {
    if (PlatformTypes.includes(platform)) {
      const searchParams = qs.parse(window.location.search);
      const redirect_url = localStorage.getItem("redirect_url");
      searchParams.redirect_url = redirect_url;
      const searchParamsStr = qs.stringify(searchParams);
      alert(searchParamsStr);
      window.location.href = `${serverUrl}/auth/${platform}/callback?${searchParamsStr}`;
    }
  }, [platform]);

  return "리디렉션중...";
};

export default CallbackPage;
