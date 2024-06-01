import { useEffect } from "react";
import qs from "qs";
import useOauthLoginMutation from "../../mutations/auth/useOauthLoginMutation";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import StorageKey from "../../storageKey";
import Loader from "../../shared_components/Loader";
import { KEY as userQueryKey } from "../../queries/user/useUserQuery";
import { getInvitationId } from "../Invitation";

export const setLoginCallbackUrl = (callbackUrl) => {
  localStorage.setItem(StorageKey.login_callback_url, callbackUrl);
};
export const removeLoginCallbackUrl = () => {
  localStorage.removeItem(StorageKey.login_callback_url);
};
export const getLoginCallbackUrl = () => {
  return localStorage.getItem(StorageKey.login_callback_url) ?? "/";
};

const LoginCallbackPage = ({ routeInfo }) => {
  const params = useParams();
  const platformName = params[routeInfo.paramKeys[0]];
  const oauthLoginMutation = useOauthLoginMutation(platformName);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (!platformName) return;
    (async () => {
      const savedLoginCallbackUrl = getLoginCallbackUrl();
      removeLoginCallbackUrl();
      const searchParams = qs.parse(window.location.search.slice(1));
      await oauthLoginMutation.mutateAsync(searchParams, {
        onError: (e) => {
          alert("알 수 없는 에러가 발생했어요!");
          navigate(`/login?callback=${savedLoginCallbackUrl}`);
        },
        onSuccess: async () => {
          await queryClient.prefetchQuery(userQueryKey("my"));
          navigate(savedLoginCallbackUrl);
          return;
        },
      });
    })();
  }, [platformName]);

  return <Loader />;
};

export default LoginCallbackPage;
