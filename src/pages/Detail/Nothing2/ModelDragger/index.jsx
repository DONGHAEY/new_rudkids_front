import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import Scene from "./Scene";
import {
  CanvasUI,
  ModelDraggerBackgroundUI,
  ModelTextUI,
  ModelTextWrapperUI,
  PlayingControllerUI,
} from "./styles";
import { useGLTF } from "@react-three/drei";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { useState } from "react";
import GuideLabel from "./GuideLabel";

const ModelDragger = () => {
  const gltf = useGLTF("/Models/Nothing.glb");

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <ModelDraggerBackgroundUI>
      <ModelTextWrapperUI>
        <ModelTextUI>3D</ModelTextUI>
      </ModelTextWrapperUI>
      <PlayingControllerUI onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <FaRegCirclePause /> : <FaRegPlayCircle />}
      </PlayingControllerUI>
      <GuideLabel />
      <CanvasUI
        gl={{ antialias: true }}
        camera={{
          fov: 60,
          aspect: 1,
          near: 0.5,
          far: 100,
        }}
      >
        <Scene gltf={gltf} autoRotate={isPlaying} />
      </CanvasUI>
    </ModelDraggerBackgroundUI>
  );
};

export default ModelDragger;
