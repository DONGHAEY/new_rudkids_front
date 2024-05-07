import qs from "qs";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePopup = () => {
  const navigate = useNavigate();

  const popupNavigte = (popupName) => {
    let popup = [];
    const queryData = qs.parse(window.location.search?.replace("?", ""));
    if (queryData?.popup) {
      popup = [...queryData?.popup];
    }
    popup.push(popupName);
    const queryString = qs.stringify({
      ...queryData,
      popup,
    });
    navigate(`?${queryString}`);
  };

  const popupBack = () => {
    // let popup = [];
    // const queryData = qs.parse(window.location.search?.replace("?", ""));
    // if (queryData?.popup) {
    //   popup = [...queryData?.popup];
    // }
    // console.log(popup);
    // popup = popup?.filter((_, idx) => idx !== popup.lastIndexOf());
    // let newQueryData = {
    //   ...queryData,
    //   popup,
    // };
    // console.log(popup);
    // if (popup.length === 0) {
    //   delete newQueryData.popup;
    // }
    // const queryString = qs.stringify(newQueryData);
    navigate(-1);
  };

  return [popupNavigte, popupBack];
};
