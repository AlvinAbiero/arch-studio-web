import { useInView } from "react-intersection-observer";

function useIntersectionObserver() {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return { inViewRef, inView };
}

export default useIntersectionObserver;
