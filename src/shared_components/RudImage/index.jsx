import { useEffect, useState } from "react";
import loadImg1 from "./assets/1.webp";
import loadImg2 from "./assets/2.webp";
import { useQuery } from "react-query";

const RudImage = ({ ImgUI, src, ...props }) => {
  const [loadingSec, setLoadingSec] = useState(0);
  const [hasErr, setHasErr] = useState(false);

  const loadImgs = [loadImg1, loadImg2];
  const { data: image, isLoading } = useQuery(["image", src], {
    queryFn: () => fetch(src).then((res) => res.blob()),
    enabled: src !== "",
  });

  const render = image && !hasErr;

  const errorHandler = () => {
    setHasErr(true);
  };

  useEffect(() => {
    if (render) return;
    const timeout = setTimeout(() => {
      setLoadingSec(loadingSec + 1);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [loadingSec]);

  if (render) {
    return (
      <ImgUI
        {...props}
        src={URL.createObjectURL(image)}
        onError={errorHandler}
      />
    );
  }

  return <ImgUI src={loadImgs[loadingSec % loadImgs.length]} {...props} />;
};

export default RudImage;
