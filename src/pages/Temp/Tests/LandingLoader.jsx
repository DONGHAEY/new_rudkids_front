import { useBodyBackground } from "../../../hooks/useBodyBackground";
import stars from "./assets/star_background.webp";
import top from "./assets/top.webp";
import bottom from "./assets/bottom.webp";
import footer from "./assets/footer.webp";
import centerlogo from "./assets/center_logo.webp";

const LandingLoader = () => {
  useBodyBackground("red");
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        maxWidth: "430px",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={top}
        style={{
          top: 0,
          width: "100%",
          background: "none",
          position: "absolute",
          zIndex: 3,
        }}
      />
      <img
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={stars}
      />
      <img
        src={bottom}
        style={{
          height: "auto",
          width: "100%",
          background: "none",
          position: "absolute",
          bottom: 0,
          zIndex: 3,
        }}
      />
      <img
        src={footer}
        style={{
          height: "auto",
          width: "100%",
          background: "none",
          position: "absolute",
          bottom: 0,
          zIndex: 3,
        }}
      />
      <div
        style={{
          position: "absolute",
          margin: "0 auto",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={centerlogo}
          style={{
            width: "70%",
          }}
        />
        <div
          style={{
            marginTop: "8%",
            width: "50%",
            height: "2.5%",
            backgroundColor: "white",
            borderRadius: "30px",
            border: "1px solid white",
          }}
        ></div>
        <p
          style={{
            color: "white",
            fontSize: "4.3vw",
            color: "white",
            marginTop: "2%",
          }}
        >
          Loading 56%
        </p>
      </div>
    </div>
  );
};

export default LandingLoader;
