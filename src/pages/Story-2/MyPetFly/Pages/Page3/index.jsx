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
          alignItems: "center",
          justifyContent: "center",
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

        <img
          src={comareSrc}
          style={{
            position: "absolute",
            height: "95%",
            width: "80%",
            zIndex: -2,
          }}
        />
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
