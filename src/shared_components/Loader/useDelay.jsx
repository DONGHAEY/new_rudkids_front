// export function useDelay(isLoading, delay) {
//   const [show, setShow] = useState(false);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (!isLoading) {
//         setShow(true);
//       }
//     }, delay);
//     return () => clearTimeout(timer);
//   }, [delay, isLoading]);

//   return show;
// }
