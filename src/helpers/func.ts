import { MutableRefObject } from "react";

export const scrollToPos = (ref: MutableRefObject<HTMLDivElement | null>) => {
  if (ref && ref.current) {
    return window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }
};
