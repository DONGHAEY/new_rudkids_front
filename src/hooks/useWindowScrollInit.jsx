import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useWindowScrollInit = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
};
