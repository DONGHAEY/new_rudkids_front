import { useLocation } from "react-router-dom";
import { PopupRouteUI } from "./styles";
import { memo, useMemo } from "react";
import * as qs from "qs";

const PopupRoute = ({ children, name = "" }) => {
  const location = useLocation();
  const search = location.search;

  const isOpen = useMemo(() => {
    const query = qs.parse(search.replace("?", ""));
    if (query.popup) {
      const findPopupName = query.popup.find(
        (popupName_) => popupName_ === name
      );
      return findPopupName ? true : false;
    }
    return false;
  }, [search]);

  return (
    <PopupRouteUI open={isOpen} hideBackdrop={true} disableAutoFocus={true}>
      {children}
    </PopupRouteUI>
  );
};

export default memo(PopupRoute);
