import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Callback = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  useEffect(() => {
    console.log(cookies);
    if (!cookies.token) return;
    localStorage.setItem("token", cookies.token);
    const redirectUrl = localStorage.getItem("redirect_url");
    location.replace(redirectUrl ?? "/");
  }, [cookies.token, setCookie, cookies]);

  return "리디렉션중...";
};

export default Callback;
