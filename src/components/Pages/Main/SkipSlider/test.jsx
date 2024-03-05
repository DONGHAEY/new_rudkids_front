import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

export function PullRelease() {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });

  // Bind it to a component
  return <animated.div {...bind()} style={{ x, y, touchAction: "none" }} />;
}
