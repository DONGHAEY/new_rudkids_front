import background1Src from "../assets/background1.png";
import bottomSrc from "../assets/bottom.png";
import urlSrc from "../assets/url.png";
import grassSrc from "../assets/grass.png";
import girlSrc from "./assets/girl.png";
import img1Src from "./assets/1.png";
import img2Src from "./assets/2.png";
import img3Src from "./assets/3.png";
import Marquee from "react-fast-marquee";

const Page1 = ({ isRender }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          zIndex: -2,
        }}
        src={background1Src}
      />
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          src={urlSrc}
          width="100%"
          style={{
            zIndex: -1,
          }}
        />
        <img
          src={img1Src}
          style={{
            width: "80%",
            marginTop: "5%",
            zIndex: -1,
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            // overflow: "scroll",
          }}
        >
          <img
            src={img2Src}
            style={{
              width: "60%",
              zIndex: -1,
            }}
          />
          <Marquee
            style={{
              position: "absolute",
              width: "50%",
              height: "18%",
              bottom: "7%",
              display: "flex",
              flexDirection: "row",
              // backgroundColor: "gray",
              zIndex: 0,
            }}
          >
            <div
              className="scroll-detector-ignore"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                top: 0,
              }}
            >
              <img src={img3Src} />
              <img src={img3Src} />
            </div>
          </Marquee>
        </div>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            bottom: 0,
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              marginBottom: "-10px",
            }}
          >
            <img
              src={girlSrc}
              style={{
                width: "80%",
                position: "absolute",
                bottom: "4px",
                right: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <img
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                zIndex: -1,
              }}
              src={grassSrc}
            />
          </div>
          <img
            style={{
              zIndex: -1,
            }}
            src={bottomSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default Page1;
