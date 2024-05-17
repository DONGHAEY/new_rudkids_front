import { useAnimations, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Blackhole = ({ setGravity, onComplete, isActive }) => {
  const { viewport } = useThree();
  const blackholeRef = useRef(null);
  const { scene: blackholeScene, animations: blackholeAnimations } = useGLTF(
    "./Models/blackhole.glb"
  );

  const position = [0, viewport.height / 2, 0];
  const { actions } = useAnimations(blackholeAnimations, blackholeRef);

  useEffect(() => {
    if (!blackholeRef.current) {
      return;
    }
    actions[blackholeAnimations?.[0].name].play();
  }, [actions, isActive, blackholeRef.current]);

  useEffect(() => {
    if (!blackholeRef.current) {
      return;
    }
    if (isActive) {
      const timeline = gsap.timeline();
      timeline
        .to(blackholeRef.current.scale, {
          x: 3,
          y: 3,
          z: 3,
          duration: 3,
          ease: "power3.inOut",
          onComplete: () => {
            let gravity = [...position];
            gravity[1] = 100;
            setGravity(gravity);
          },
        })
        .to(blackholeRef.current.scale, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1,
          delay: 1,
          ease: "power1.in",
          onComplete: () => {
            if (typeof onComplete === "function") {
              onComplete();
            }
          },
        });
      timeline.play();
    } else {
      gsap.set(blackholeRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
      });
      setGravity([0, -100.8, 0]);
    }
  }, [blackholeRef.current, isActive]);

  return (
    <primitive
      ref={blackholeRef}
      object={blackholeScene}
      position={position}
      scale={1.5}
    />
  );
};
