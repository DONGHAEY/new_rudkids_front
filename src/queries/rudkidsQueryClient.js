import { QueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const useRudkidsQueryClient = () => {
  const navigate = useNavigate();

  const onError = (e) => {
    const { response } = e;
    switch (response?.status) {
      case 401:
        if (!window.location.href.includes("list")) {
          queryClient.cancelQueries();
          queryClient.cancelMutations();
          navigate("list");
        }
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
