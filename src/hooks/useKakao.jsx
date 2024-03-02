import { useEffect } from "react";

export const useKakao = () => {
  useEffect(() => {
    if (!window.Kakao) {
      return;
    }
    window.Kakao.init("89277aa3114d4374c718f792f03a60c2");
  }, [window.Kakao]);

  return window.Kakao;
};
