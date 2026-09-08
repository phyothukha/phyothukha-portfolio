import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CursorSection = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        delay: 0,
      });
    });

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 });
    };
    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 });
    };
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mousedown", hideCursor);
    document.addEventListener("mouseup", showCursor);
  }, []);
  return (
    <div
      ref={cursorRef}
      className="hidden lg:block w-6 h-6 opacity-0 pointer-events-none rounded-full border-2 border-wtsecondary  z-[9999] fixed -top-3 -left-3"
    />
  );
};

export default CursorSection;
