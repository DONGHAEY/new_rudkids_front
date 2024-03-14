import { createRef, useMemo, useRef, useState } from "react";
import { RandomClouds } from "./RandomClouds";
import { WatchButton } from "./WatchButton";
import { ProductModel } from "./ProductModel";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion-3d";
import { SunModel } from "./SunModel";
import { GrassModel } from "./GrassModel";

const sounds = {
  hit: new Audio("/audio/hit_sound_2.mp3"),
  slide: new Audio("/audio/slide_sound.mp3"),
  scare: new Audio("/audio/scare.mp3"),
};

const getPositionForXZAngle = (distance, angleRad) => {
  return {
    x: distance * Math.cos(angleRad),
    z: distance * Math.sin(angleRad),
  };
};

export const Scene = ({ productList }) => {
  const [controlMaxDistance, setControlMaxDistance] = useState(Infinity);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isWatching, setIsWatching] = useState(false);
  const three = useThree();

  const productRefList = new Array(productList.length)
    .fill(null)
    .map(() => createRef());

  const handGltf = useGLTF("/models/hand.glb");
  const handGroupRef = useRef(null);
  const handRef = useRef(null);

  const pieceOfAngleRad = (Math.PI * 2) / productList.length;

  useEffect(() => {
    if (!three.camera) return;
    gsap.fromTo(
      three.camera.position,
      {
        z: 100,
      },
      {
        z: 20,
        duration: 1.5,
        onComplete: () => {
          setControlMaxDistance(25);
        },
      }
    );
  }, [three.camera]);

  const productDistance = 4;
  const cameraSelectDistance = 25;

  useEffect(() => {
    productRefList.map((productRef, idx) => {
      const positionY = 0;
      const { x: positionX, z: positionZ } = getPositionForXZAngle(
        productDistance,
        pieceOfAngleRad * idx
      );
      const rotationY = Math.PI / 2 - pieceOfAngleRad * idx;
      gsap.to(productRef.current.rotation, {
        y: rotationY,
      });
      gsap.fromTo(
        productRef.current.position,
        {
          x: 0,
          y: 10,
          z: 0,
        },
        {
          x: positionX,
          y: positionY,
          z: positionZ,
          duration: 1.5,
        }
      );
    });
  }, []);

  useEffect(() => {
    if (!handRef.current) return;
    if (!selectedProductId) return;
    const idx = productList.findIndex(
      (product) => product.id === selectedProductId
    );
    const { x: cameraPosX, z: cameraPosZ } = getPositionForXZAngle(
      cameraSelectDistance,
      pieceOfAngleRad * idx
    );
    gsap.to(three.camera.position, {
      x: cameraPosX,
      z: cameraPosZ,
      y: 0,
      duration: isWatching ? 0 : 1.5,
      ease: "power1.inOut",
    });
    const handPositionY = 0;
    const { x: handPositionX, z: handPositionZ } = getPositionForXZAngle(
      productDistance - 2.8,
      pieceOfAngleRad * idx
    );
    gsap.to(handGroupRef.current.position, {
      x: handPositionX,
      y: handPositionY,
      z: handPositionZ,
    });
    const rotationY = -1 * pieceOfAngleRad * idx;
    gsap.to(handGroupRef.current.rotation, {
      y: rotationY,
    });
    if (!isWatching) return;
    const productRef = productRefList[idx];
    const timeline = gsap.timeline();
    const collisionPointY = three.camera.position.y;
    const { x: collisionPointX, z: collisionPointZ } = getPositionForXZAngle(
      cameraSelectDistance - 2,
      pieceOfAngleRad * idx
    );
    const { x: handStopPosX, z: handStopPosZ } = getPositionForXZAngle(
      cameraSelectDistance - 4.5,
      pieceOfAngleRad * idx
    );
    const { x: handHidePosX, z: handHidePosZ } = getPositionForXZAngle(
      cameraSelectDistance - 0.7,
      pieceOfAngleRad * idx
    );
    timeline
      .to(handGroupRef.current.rotation, {
        z: Math.PI / 8,
        duration: 0.3,
      })
      .to(handGroupRef.current.rotation, {
        z: (Math.PI / 7) * -1,
        duration: 0.3,
        ease: "power3.inOut",
      })
      .to(
        productRef.current.position,
        {
          x: collisionPointX,
          z: collisionPointZ,
          y: collisionPointY,
          duration: 0.28,
          ease: "power3.inOut",
          onStart: () => {
            sounds.hit.play();
          },
        },
        "-=0.25"
      )
      .to(
        handGroupRef.current.position,
        {
          x: handStopPosX,
          z: handStopPosZ,
          y: collisionPointY,
          ease: "power3.inOut",
          duration: 0.28,
        },
        "<"
      )
      .to(productRefList[idx].current.position, {
        y: -20,
        duration: 2,
        delay: 3,
        onStart: () => {
          sounds.slide.play();
          sounds.scare.play();
        },
      })
      .to(
        handGroupRef.current.position,
        {
          x: handHidePosX,
          y: three.camera.position.y + 0.8,
          z: handHidePosZ,
          duration: 7.5,
          ease: "power1.in",
          onComplete: () => {
            sounds.slide.play();
            setTimeout(() => {
              window.location.href = "/";
            }, 500);
          },
        },
        "-=0.3"
      );

    timeline.play();
  }, [selectedProductId, isWatching, handRef.current]);

  const productClickHandler = (productId) => {
    if (selectedProductId === productId) {
      setSelectedProductId(null);
    } else {
      setSelectedProductId(productId);
    }
  };

  return (
    <>
      <motion.group
        initial={{
          rotateY: 0,
        }}
        animate={{ rotateY: Math.PI * 4 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        {productList.map((data, idx) => (
          <group
            ref={productRefList[idx]}
            key={data.id}
            onClick={() => productClickHandler(data.id)}
          >
            <ProductModel
              setSelectedProductId={setSelectedProductId}
              selectedProductId={selectedProductId}
              isWatching={isWatching}
              selected={selectedProductId === data.id}
              data={data}
            />
          </group>
        ))}
      </motion.group>
      <group ref={handGroupRef} visible={selectedProductId ?? false}>
        <primitive
          ref={handRef}
          rotation-y={Math.PI / 1.3}
          rotation-z={(-1 * Math.PI) / 5}
          rotation-x={Math.PI / 2.5}
          scale={0.2}
          object={handGltf.scene}
          position={[0, -4, 0]}
        />
      </group>
      <RandomClouds />
      <SunModel position={[-25, 20, 30]} />
      <GrassModel position={[0, -41, 0]} />
      <ambientLight intensity={1} position={[-25, 20, 30]} color={0xffffff} />
      <WatchButton
        isWatching={isWatching}
        setIsWatching={setIsWatching}
        productId={selectedProductId}
        setProductId={setSelectedProductId}
      />
      <OrbitControls
        minPolarAngle={!isWatching ? Math.PI / 2.5 : 0}
        maxPolarAngle={!isWatching ? Math.PI / 2 : Math.PI * 2}
        minDistance={15}
        maxDistance={controlMaxDistance}
        enableZoom={!isWatching}
        enableRotate={false}
        enableDamping={!isWatching}
        enablePan={false}
      />
    </>
  );
};
