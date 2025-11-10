import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMedia } from "../Hooks/useMedia.js";
import { useMeasure } from "../Hooks/useMeasure.js";

gsap.registerPlugin(ScrollTrigger);

// Preload images before animating
const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);
  const hasMounted = useRef(false);
  const animatedItems = useRef(new Set());

  // Get initial position based on animateFrom direction
  const getInitialPosition = (item) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === "random") {
      const dirs = ["top", "bottom", "left", "right"];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  // Preload all images
  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  // Setup scroll trigger to detect when component is in view
  useEffect(() => {
    if (!containerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        setHasScrolledIntoView(true);
      },
    });

    return () => trigger.kill();
  }, [containerRef]);

  // Calculate masonry grid layout
  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  // Calculate container height
  const containerHeight = useMemo(() => {
    if (grid.length === 0) return 0;
    const maxY = Math.max(...grid.map((item) => item.y + item.h));
    return maxY + 20;
  }, [grid]);

  // Animate items - initial staggered animation or smooth repositioning
  useLayoutEffect(() => {
    if (!imagesReady || !hasScrolledIntoView) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      // Check if this specific item has been animated before
      const isNewItem = !animatedItems.current.has(item.id);

      if (!hasMounted.current || isNewItem) {
        // Initial animation with stagger for new items
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: "blur(10px)" }),
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: "blur(0px)" }),
            duration: 0.8,
            ease: "power3.out",
            delay: isNewItem ? index * stagger * 0.3 : index * stagger,
          }
        );
        // Mark this item as animated
        animatedItems.current.add(item.id);
      } else {
        // Subsequent animations (smooth repositioning for existing items)
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [
    grid,
    imagesReady,
    hasScrolledIntoView,
    stagger,
    animateFrom,
    blurToFocus,
    duration,
    ease,
  ]);

  // Hover interactions
  const handleMouseEnter = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (id, element) => {
    if (scaleOnHover) {
      gsap.to(`[data-key="${id}"]`, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
    if (colorShiftOnHover) {
      const overlay = element.querySelector(".color-overlay");
      if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full transition-all duration-500 ease-out"
      style={{ height: `${containerHeight}px` }}
    >
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content cursor-pointer"
          style={{ willChange: "transform, width, height, opacity" }}
          onClick={() => window.open(item.url, "_blank", "noopener")}
          onMouseEnter={(e) => handleMouseEnter(item.id, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(item.id, e.currentTarget)}
        >
          <div
            className="relative w-full h-full bg-cover bg-center rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] uppercase text-[10px] leading-[10px]"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            {colorShiftOnHover && (
              <div className="color-overlay absolute inset-0 rounded-[10px] bg-gradient-to-tl from-pink-500/50 to-sky-500/50 opacity-0 pointer-events-none" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
