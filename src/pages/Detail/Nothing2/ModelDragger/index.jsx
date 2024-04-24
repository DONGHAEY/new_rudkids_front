import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import Scene from "./Scene";
import {
  CanvasUI,
  ModelDraggerBackgroundUI,
  ModelTextUI,
  ModelTextWrapperUI,
} from "./styles";
import { useGLTF } from "@react-three/drei";

const ModelDragger = () => {
  const gltf = useGLTF("/Models/Nothing.glb");
  return (
    <ModelDraggerBackgroundUI>
      <ModelTextWrapperUI>
        <ModelTextUI>3D</ModelTextUI>
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
        <Scene gltf={gltf} />
      </CanvasUI>
    </ModelDraggerBackgroundUI>
  );
};

export default ModelDragger;
