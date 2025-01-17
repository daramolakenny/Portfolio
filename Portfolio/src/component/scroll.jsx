import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  useEffect(() => {
    const scrollToTopButton = document.getElementById("scrollToTop");

    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#home"
      id="scrollToTop"
      className="fixed bottom-4 right-8 bg-blue-500 text-white p-2 rounded-full"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </a>
  );
};

export default ScrollToTopButton;
