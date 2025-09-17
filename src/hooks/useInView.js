import { useEffect, useRef, useState } from 'react';

/**
 * A custom React hook that tracks the visibility of a component in the viewport.
 * It uses the IntersectionObserver API to efficiently detect when an element
 * enters the screen.
 *
 * @param {IntersectionObserverInit} options - Configuration options for the IntersectionObserver.
 * @returns {[React.RefObject<any>, boolean]} A tuple containing the ref to attach to the element
 * and a boolean indicating if the element is in view.
 */
export const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Disconnect the observer once the element is in view to avoid unnecessary checks.
        observer.disconnect();
      }
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, options]);

  return [ref, isInView];
};

export default useInView;