import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { useState } from "react";
import { useEffect } from "react";
import { FirstSeasonModel } from "./FirstSeasonModel";
import styled from "styled-components";

export const ProductModel = ({
  data,
  selectedProductId,
  setSelectedProductId,
  radius,
  cameraRadius,
  rotation,
}) => {
  const three = useThree();
  const x = radius * Math.cos(rotation);
  const z = radius * Math.sin(rotation);
  const cameraX = cameraRadius * Math.cos(rotation);
  const cameraZ = cameraRadius * Math.sin(rotation);

  const [sign, setSign] = useState(false);

  const selected = selectedProductId === data.id;

  useEffect(() => {
    setSign(false);
    if (selected) {
      gsap.fromTo(
        three.camera.position,
        {
          x: three.camera.position.x,
          z: three.camera.position.z,
        },
        {
          x: cameraX,
          z: cameraZ,
          duration: 2,
          onComplete: () => {
            setSign(true);
          },
        }
      );
    }
  }, [selected, cameraX, cameraZ, three.camera.position]);

  return (
    <group
      onClick={() => setSelectedProductId(data.id)}
      onPointerMissed={() => setSelectedProductId(null)}
      rotation-y={Math.PI / 2 - rotation}
      position-x={x}
      position-z={z}
    >
      {sign && selected && <MetaTag name={data.name} content={data.content} />}
      <FirstSeasonModel data={data} />
    </group>
  );
};

const MetaTag = ({ name, content }) => {
  return (
    <Html
      center
      style={{
        backgroundColor: "rgba(0, 0,0, 10%)",
        borderRadius: "20px",
        margin: 0,
        padding: "20px",
        whiteSpace: "nowrap",
        color: "white",
        position: "absolute",
        top: "-150px",
      }}
    >
      <ProductName>{name}</ProductName>
      <ProductContent>{content}</ProductContent>
    </Html>
  );
};

const ProductName = styled.p`
  @font-face {
    font-family: "Archivo_SemiExpanded-Bold";
    src: url("/fonts/Archivo/Archivo_SemiExpanded-Bold.ttf");
  }
  font-family: "Archivo_SemiExpanded-Bold";
  font-size: 30px;
`;

const ProductContent = styled.p`
  @font-face {
    font-family: "Archivo_SemiExpanded-Bold";
    src: url("/fonts/Archivo/Archivo_SemiExpanded-Bold.ttf");
  }
  font-family: "Archivo_SemiExpanded-Bold";
  font-size: 15px;
`;
