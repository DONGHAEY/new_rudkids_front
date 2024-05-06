import { QueryClient } from "react-query";
import queryKey from "./key";

const useRudkidsQueryClient = () => {
  const onError = (e) => {
    const { response } = e;
    switch (response?.status) {
      case 401:
        queryClient.cancelQueries([queryKey.user, "me"]);
        queryClient.cancelMutations(queryKey.user);
        queryClient.setQueryData([queryKey.user, "me"], null);
        break;
      default:
        break;
    }
    return e;
  };

  const queryClient = new QueryClient({
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

  return [queryClient];
};

export default useRudkidsQueryClient;
