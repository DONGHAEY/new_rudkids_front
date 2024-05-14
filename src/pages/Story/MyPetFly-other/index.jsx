import { useState } from "react";
import Scene3D from "./Scene3D";
import { PageUI } from "./styles";
import ScrollScene2D from "./ScrollScene2D";

const MyPetFly = () => {
  const [offset, setOffset] = useState(0);

  return (
    <PageUI>
      <Scene3D offset={offset} />
      <ScrollScene2D offset={offset} setOffset={setOffset} />
    </PageUI>
  );
};

export default MyPetFly;
