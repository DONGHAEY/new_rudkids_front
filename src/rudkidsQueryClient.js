import { QueryClient } from "react-query";
import queryKey from "./queries/key";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const useRudkidsQueryClient = () => {
  const navigate = useNavigate();

  const onError = (e) => {
    const { response } = e;
    switch (response?.status) {
      case 401:
        queryClient.cancelQueries([queryKey.user, "my"]);
        queryClient.cancelMutations(queryKey.user);
        queryClient.setQueryData([queryKey.user, "my"], null);
        // const callback = window.location.pathname + window.location.search;
        navigate(`/401`);
        break;
      default:
        break;
    }
    return e;
  };

  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 0,
          onError: onError,
        },
        mutations: {
          onError: onError,
        },
      },
    });
  }, []);

  return [queryClient];
};

export default useRudkidsQueryClient;
