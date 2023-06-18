import React, { useState, useEffect } from "react";

const MotionText = ({ text, delay }) => {
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const animateText = () => {
      setAnimatedText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex < text.length) {
        timeout = setTimeout(animateText, delay);
      }
    };

    timeout = setTimeout(animateText, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{animatedText}</span>;
};

export default MotionText;
