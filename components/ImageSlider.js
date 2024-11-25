import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sanitizeString } from "../utils/utils";

const ImageSlider = ({ images, className, objectFit = "cover" }) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const nextImage = () => {
    setVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setVisible(true);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4500);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    center: {
      opacity: 1,
      transition: { duration: 3.0, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeIn" },
    },
  };
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={true}>
        {visible && (
          <motion.img
            key={index}
            src={sanitizeString(images[index])}
            alt={`Slide ${index}`}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute rounded-md shadow-xl ${
              objectFit === "cover"
                ? "object-cover w-full h-full"
                : "object-contain"
            }`}
            style={{ filter: "url(#feather-edge-inner-shadow)" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
