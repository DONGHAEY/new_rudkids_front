import { useParams } from "react-router-dom";
import { useEffect } from "react";
import qs from "qs";
import { instagramLogin } from "../../apis/user/login";
import { getUser } from "../../apis/user/getUser";

const PlatformTypes = ["instagram"];

const CallbackPage = () => {
  const params = useParams();
  const platform = params.platform;

  useEffect(() => {
    (async () => {
      if (PlatformTypes.includes(platform)) {
        const searchParams = qs.parse(window.location.search.slice(1));
        const redirect_url = localStorage.getItem("redirect_url");
        await instagramLogin(searchParams);
        //쿠키 들어오는거 확인좀...
        console.log(await getUser());
        // window.location.href = redirect_url;
      }
    })();
  }, [platform]);

  return "리디렉션중...";
};

export default CallbackPage;
