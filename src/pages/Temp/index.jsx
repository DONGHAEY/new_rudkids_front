import React from "react";
import StickTest from "./Tests/StickTest";
import ButtonFontTest from "./Tests/ButtonFontTest";
import StickTest2 from "./Tests/StickTest2";
import FixedTest1 from "./Tests/FixedTest";
import LandingLoader from "./Tests/LandingLoader";
import RudWindow from "../../shared_components/RudWindow";
import LoaderV2 from "../../shared_components/LoaderV2";

function Temp() {
  // return <LandingLoader />;
  // return <StickTest />;
  // return <ButtonFontTest />;
  // return <StickTest2 />;
  // return <FixedTest1 />;

  return <LoaderV2 />;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <RudWindow />
    </div>
  );
}

export default Temp;
