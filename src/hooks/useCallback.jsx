import { useNavigate } from "react-router-dom";

const useCallback = () => {
  const navigate = useNavigate();

  const navigateToCallback = () => {
    const search = qs.parse(window.location.search?.replace("?", ""));
    const callbackurl = search?.["callback_url"];
    if (callbackurl) {
      navigate(callbackurl);
    } else {
      navigate("/");
    }
  };

  const navigateFromCallback = (where) => {
    const search = qs.parse(window.location.search?.replace("?", ""));
    search["callback_url"] = window.location.href;
    navigate(`${where}?${qs.stringify(search)}`);
  };

  return {
    navigateToCallback,
    navigateFromCallback,
  };
};

export default useCallback;
