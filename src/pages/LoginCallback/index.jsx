import { useEffect } from "react";
import qs from "qs";
import useOauthLoginMutation from "../../mutations/auth/useOauthLoginMutation";
import { useNavigate, useParams } from "react-router-dom";
import useUserQuery from "../../queries/user/useUserQuery";
import { useQueryClient } from "react-query";
import StorageKey from "../../storageKey";
import queryKey from "../../queries/key";

export const setLoginCallbackUrl = (callbackUrl) => {
  localStorage.setItem(StorageKey.login_callback_url, callbackUrl);
};

export const removeLoginCallbackUrl = () => {
  localStorage.removeItem(StorageKey.login_callback_url);
};

export const getLoginCallbackUrl = () => {
  return localStorage.getItem(StorageKey.login_callback_url);
};

const LoginCallbackPage = ({ routeInfo }) => {
  const params = useParams();
  const platformName = params[routeInfo.paramKeys[0]];
  const oauthLoginMutation = useOauthLoginMutation(platformName);
  const { data: userData } = useUserQuery();
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  useEffect(() => {
    if (!platformName) return;
    alert(platformName);
    (async () => {
      const searchParams = qs.parse(window.location.search.slice(1));
      await oauthLoginMutation.mutateAsync(searchParams, {
        onError: (e) => {
          alert("알 수 없는 에러가 발생했어요!");
          window.location.href = "/login";
        },
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey.user);
        },
      });
    })();
  }, [platformName]);

  useEffect(() => {
    if (!userData) return;
    const savedLoginCallbackUrl = getLoginCallbackUrl();
    if (savedLoginCallbackUrl) {
      removeLoginCallbackUrl();
      navigate(savedLoginCallbackUrl);
      return;
    }
    navigate("/");
  }, [userData]);

  return "리디렉션중...";
};

export default LoginCallbackPage;
