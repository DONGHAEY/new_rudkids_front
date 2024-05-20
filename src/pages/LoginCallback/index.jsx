import { useEffect } from "react";
import qs from "qs";
import useInstagramLoginMutation from "../../mutations/auth/useInstagramLoginMutation";

const LoginCallbackPage = () => {
  const instagramLoginMutation = useInstagramLoginMutation();

  useEffect(() => {
    (async () => {
      const searchParams = qs.parse(window.location.search.slice(1));
      const loginCallbackUrl = localStorage.getItem("login_callback_url");
      await instagramLoginMutation.mutateAsync(searchParams);
      //아 모르겠다 저장되겠지...
      window.location.href = loginCallbackUrl ?? "/";
    })();
  }, []);

  return "리디렉션중...";
};

export default LoginCallbackPage;
