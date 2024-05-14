import background1Src from "../assets/background1.png";
import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import comareSrc from "./assets/compare.png";

const Page3 = () => {
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
          src={background1Src}
          style={{
            position: "absolute",
            height: "103%",
            width: "100%",
            zIndex: -2,
          }}
        />
        {/*  */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            // overflow: "hidden",
          }}
        >
          <img
            src={comareSrc}
            style={{
              //   position: "absolute",
              width: "80%",
              zIndex: -2,
            }}
          />
        </div>
      </div>
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
  );
};

export default Page3;
