import { useSpring, animated } from "react-spring";
import { useDrag } from "react-use-gesture";

export function CancelExample() {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));
  const bind = useDrag(({ active, movement: [mx], cancel }) => {
    if (mx > 200) cancel();
    api.start({ x: active ? mx : 0, immediate: active });
  });

  return <animated.div {...bind()} style={{ x, backgroundColor: "gray" }} />;
}
