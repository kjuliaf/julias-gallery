import { useEffect, useState, useRef } from "react";

const useMasonry = () => {
  const masonryContainer = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<ChildNode[]>([]);

  useEffect(() => {
    if (!masonryContainer.current) return;
    
    const observer = new MutationObserver(() => {
      if (masonryContainer.current) {
        setItems(Array.from(masonryContainer.current.children) as HTMLElement[]);
      }
    });
    observer.observe(masonryContainer.current, { childList: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMasonry = () => {
      if (!items || items.length < 1) return;
      let gapSize = 0;
      if (masonryContainer.current) {
        gapSize = parseInt(
          window
            .getComputedStyle(masonryContainer.current)
            .getPropertyValue("grid-row-gap"),
        );
      }
      items.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        let previous = el.previousSibling;
        while (previous) {
          if (previous.nodeType === 1) {
            el.style.marginTop = "0";
            if (
              previous instanceof HTMLElement &&
              elementLeft(previous) === elementLeft(el)
            ) {
              el.style.marginTop =
                -(elementTop(el) - elementBottom(previous) - gapSize) + "px";
              break;
            }
          }
          previous = previous.previousSibling;
        }
      });
    };

    const timeout = setTimeout(handleMasonry, 100)

    handleMasonry();
    window.addEventListener("resize", handleMasonry);
    return () => {
      clearTimeout(timeout)
      window.removeEventListener("resize", handleMasonry);
    };
  }, [items]);

  const elementLeft = (el: HTMLElement) => {
    return el.getBoundingClientRect().left;
  };

  const elementTop = (el: HTMLElement) => {
    return el.getBoundingClientRect().top + window.scrollY;
  };

  const elementBottom = (el: HTMLElement) => {
    return el.getBoundingClientRect().bottom + window.scrollY;
  };

  return masonryContainer;
};

export default useMasonry;
