import { useEffect } from "react";

export const useLockBodyScroll = (isElShown, el) => {
  useEffect(() => {
    console.log(isElShown);
    document.body.style.overflow = isElShown ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = el.length > 0 ? "hidden" : "visible";
    };
  }, [isElShown]);
};
