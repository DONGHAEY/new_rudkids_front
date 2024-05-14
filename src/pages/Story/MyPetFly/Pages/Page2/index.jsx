import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import img1Src from "./assets/1.png";
import img2Src from "./assets/2.png";
import img3Src from "./assets/3.png";
import img4Src from "./assets/4.png";

const Page1 = ({ isRender }) => {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -4,
          backgroundColor: "#FFF2FF",
        }}
      />
      <img
        src={urlSrc}
        style={{
          zIndex: -1,
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "relative",
        }}
      >
        <img
          src={img2Src}
          style={{
            width: "80%",
            objectFit: "cover",
            marginInline: "auto",
            marginTop: "10%",
            zIndex: 2,
          }}
        />
        <img
          style={{
            left: 0,
            position: "absolute",
            height: "100%",
            zIndex: -1,
          }}
          src={img1Src}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            position: "relative",
            backgroundColor: "#FFC6F6",
            marginBottom: "-7px",
            height: "63px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              position: "absolute",
              width: "70%",
              zIndex: 1,
              bottom: "55px",
            }}
            src={img3Src}
          ></img>
          <img
            src={img4Src}
            style={{
              position: "absolute",
              height: "100%",
              top: "-10px",
              zIndex: 1,
            }}
          />
        </div>
        <img
          style={{
            zIndex: -2,
          }}
          src={bottomSrc}
        />
      </div>
    </div>
  );
};

export default Page1;
