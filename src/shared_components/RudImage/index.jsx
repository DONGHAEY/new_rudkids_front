import { useEffect, useState } from "react";
import loadImg1 from "./assets/1.webp";
import loadImg2 from "./assets/2.webp";
import { useQuery } from "react-query";

const RudImage = ({ ImgUI, src, ...props }) => {
  const [loadingSec, setLoadingSec] = useState(0);

  const loadImgs = [loadImg1, loadImg2];
  const { data: image, isLoading } = useQuery(["image", src], () =>
    fetch(src).then((res) => res.blob())
  );

  useEffect(() => {
    if (!isLoading) return;
    const timeout = setTimeout(() => {
      setLoadingSec(loadingSec + 1);
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [loadingSec]);

  if (!isLoading) {
    return <ImgUI src={URL.createObjectURL(image)} {...props} />;
  }

  return <ImgUI src={loadImgs[loadingSec % loadImgs.length]} {...props} />;
};

export default RudImage;
