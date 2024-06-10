import { useEffect } from "react";
import qs from "qs";
import useOauthLoginMutation from "../../mutations/auth/useOauthLoginMutation";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import Loader from "../../shared_components/Loader";
import { KEY as userQueryKey } from "../../queries/user/useUserQuery";
import { getLoginCallbackUrl, removeLoginCallbackUrl } from "../Login";

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
          navigate(`/login`);
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
