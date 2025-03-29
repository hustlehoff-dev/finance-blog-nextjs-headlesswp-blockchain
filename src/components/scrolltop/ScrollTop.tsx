"use client";

import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import styles from "./scrolltop.module.scss";

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > 420);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Scrolling to top sir!");
  };

  return (
    <>
      {isVisible && (
        <button
          className={styles["scroll-top"]}
          onClick={scrollToTop}
          aria-label="Scroll to top">
          <KeyboardDoubleArrowUpIcon />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
