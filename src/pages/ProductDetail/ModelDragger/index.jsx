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
import { useState } from "react";
import GuideLabel from "./GuideLabel";
import { Html, useGLTF } from "@react-three/drei";
import IndexChanger from "./IndexChanger";

const ModelDragger = ({
  modelUrls = [],
  modelIdx = 0,
  setModelIdx,
  modelName = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(true);

  const gltfs = useGLTF([...modelUrls]);
  const gltf = gltfs?.[modelIdx];

  const maxIndex = modelUrls?.length - 1;

  return (
    <ModelDraggerBackgroundUI>
      <ModelTextWrapperUI>
        <ModelTextUI>{modelName}</ModelTextUI>
      </ModelTextWrapperUI>
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
          {maxIndex !== 0 && (
            <IndexChanger
              setIndex={setModelIdx}
              index={modelIdx}
              maxIndex={maxIndex}
            />
          )}
          <GuideLabel />
        </Html>
      </CanvasUI>
      <PlayingControllerUI onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaRegCirclePause /> : <FaRegPlayCircle />}
      </PlayingControllerUI>
    </ModelDraggerBackgroundUI>
  );
};

export default ModelDragger;
