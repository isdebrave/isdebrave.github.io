export const getIntersectionObserver = (ulElement: HTMLElement) => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const textContent = entry.target.textContent ?? "";

        ulElement.childNodes.forEach((li) => {
          const element = li as Element;

          if (element.textContent === textContent) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
        });
      }
    });
  };

  //   const options: IntersectionObserverInit = {
  //     root: null,
  //     rootMargin: "-90px 0px -100% 0px",
  //     threshold: 0.0,
  //   };

  const options: IntersectionObserverInit = {
    rootMargin: "-70px 0px -90% 0px",
  };

  const observer = new IntersectionObserver(callback, options);

  return observer;
};
