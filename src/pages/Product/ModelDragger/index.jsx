import Scene from "./Scene";
import {
  CanvasUI,
  ModelDraggerBackgroundUI,
  ModelTextUI,
  ModelTextWrapperUI,
  PlayingControllerUI,
} from "./styles";

import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { useEffect, useState } from "react";
import GuideLabel from "./GuideLabel";
import { Html, useGLTF } from "@react-three/drei";

const ModelDragger = ({ modelUrls = [], modelIdx = 0, modelName = "" }) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const gltfs = useGLTF([...modelUrls]);
  const gltf = gltfs?.[modelIdx];

  return (
    <ModelDraggerBackgroundUI>
      <ModelTextWrapperUI>
        <ModelTextUI>{modelName}</ModelTextUI>
      </ModelTextWrapperUI>
      <PlayingControllerUI onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaRegCirclePause /> : <FaRegPlayCircle />}
      </PlayingControllerUI>
      <CanvasUI
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: 1,
          near: 0.5,
          far: 100,
        }}
      >
        {gltf && <Scene gltf={gltf} autoRotate={isPlaying} />}
        <Html fullscreen={true}>
          <GuideLabel />
        </Html>
      </CanvasUI>
    </ModelDraggerBackgroundUI>
  );
};

export default ModelDragger;
