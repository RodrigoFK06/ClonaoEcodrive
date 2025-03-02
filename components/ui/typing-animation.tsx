import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const TypingAnimation = ({ text }: { text: string }) => {
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return; 

    const animateText = async () => {
      for (let i = 0; i <= text.length; i++) {
        await requestAnimationFrame(() =>
          controls.start({
            width: `${(i * 100) / text.length}%`,
            transition: { duration: 0.05 },
          })
        );
      }
    };

    animateText();
  }, [isMounted, controls, text]); 

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={controls}
      className="overflow-show whitespace-nowrap text-white"
    >
      {text}
    </motion.div>
  );
};

export default TypingAnimation;
