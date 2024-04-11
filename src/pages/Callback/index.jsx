import { useParams } from "react-router-dom";
import { useEffect } from "react";
import qs from "qs";
import { instagramLogin } from "../../apis/user/login";
import { getUser } from "../../apis/user/getUser";

const PlatformTypes = ["instagram"];

const CallbackPage = () => {
  // const params = useParams();
  // const platform = params.platform;

  useEffect(() => {
    (async () => {
      // if (PlatformTypes.includes(platform)) {
      const searchParams = qs.parse(window.location.search.slice(1));
      const redirect_url = localStorage.getItem("redirect_url");
      // console.log("?1");
      const { token } = await instagramLogin(searchParams);
      if (token) {
        localStorage.setItem("token", token);
      }
      // console.log("?2");
      //아 모르겠다 저장되겠지...
      window.location.href = redirect_url;
      // }
    })();
  }, []);

  return "리디렉션중...";
};

export default CallbackPage;
