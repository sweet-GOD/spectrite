import React, { useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Top = () => {
    const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
        <div className="relative overflow-hidden bg-blue-950 lg:h-[80vh] h-[60vh] ">
      <div className="w-full h-full absolute top-0 left-0 bg-[#33333367] "></div>
        <motion.h1
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="absolute text-5xl head text-white font-bold transform -translate-y-1/2 top-1/2 lg:left-40 left-12   uppercase"
        >
General Contractors
</motion.h1>
        <img
          className="w-full h-full object-top"
          src={require("../../asset/contractor1.jpg")}
          alt=""
        />
      </div>
    </div>
  )
}

export default Top