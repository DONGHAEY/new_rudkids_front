import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import grassSrc from "../assets/grass.png";
import img1Src from "./assets/1.png";

const Page4 = () => {
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
        {/* <img
          src={background1Src}
          style={{
            position: "absolute",
            height: "103%",
            width: "100%",
            zIndex: -2,
          }}
        /> */}
        {/*  */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={img1Src}
            style={{
              marginTop: "40px",
              width: "67%",
              zIndex: -2,
            }}
          />
        </div>
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
          src={grassSrc}
          style={{
            width: "100%",
            zIndex: -2,
            marginBottom: "-5px",
          }}
        />
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

export default Page4;
