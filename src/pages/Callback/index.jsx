import { useParams } from "react-router-dom";
import { useEffect } from "react";
import qs from "qs";
import { instagramLogin } from "../../apis/user/login";

const PlatformTypes = ["instagram"];

const CallbackPage = () => {
  const params = useParams();
  const platform = params.platform;

  useEffect(() => {
    if (PlatformTypes.includes(platform)) {
      const searchParams = qs.parse(window.location.search.slice(1));
      const redirect_url = localStorage.getItem("redirect_url");
      instagramLogin(searchParams)
        .then((data) => {
          // window.location.href = redirect_url;
        })
        .catch((e) => console.log(e));
    }
  }, [platform]);

  return "리디렉션중...";
};

export default CallbackPage;
