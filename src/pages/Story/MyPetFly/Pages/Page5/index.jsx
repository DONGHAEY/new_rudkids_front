import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import background2Src from "../assets/background2.png";
import grassSrc from "../assets/grass.png";
import img2Src from "./assets/2.png";

const Page5 = () => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <img
        src={urlSrc}
        style={{
          width: "100%",
          zIndex: -1,
        }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <img
          src={background2Src}
          style={{
            position: "absolute",
            height: "103%",
            width: "100%",
            zIndex: -2,
          }}
        />
        {/*  */}
        <img
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            zIndex: -1,
            marginBottom: "-10px",
          }}
          src={img2Src}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            bottom: 0,
            zIndex: -1,
          }}
          src={bottomSrc}
        />
      </div>
    </div>
  );
};

export default Page5;
