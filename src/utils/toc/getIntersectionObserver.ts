import { Dispatch, SetStateAction } from "react";

export const getIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<string>>
) => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.textContent!);
      }
    });
  };

  //   const options: IntersectionObserverInit = {
  //     root: null,
  //     rootMargin: "-90px 0px -100% 0px",
  //     threshold: 0.0,
  //   };

  const options: IntersectionObserverInit = {
    rootMargin: "-64px 0px -40% 0px",
  };

  const observer = new IntersectionObserver(callback, options);

  return observer;
};
