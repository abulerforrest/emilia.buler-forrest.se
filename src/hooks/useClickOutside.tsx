import { useEffect, useRef, MouseEvent } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (event: { target: EventTarget | null }) => {
      if (ref.current && !ref.current.contains(event.target as any)) {
        if (
          (event.target as any).id !== "menuButton" &&
          (event.target as any).id !== "menuButtonIconClose" &&
          (event.target as any).id !== "menuButtonIconHamburger"
        ) {
          callback();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
