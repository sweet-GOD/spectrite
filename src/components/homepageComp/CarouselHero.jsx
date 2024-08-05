import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import one from "../../asset/agro1.jpg";
import four from "../../asset/import1.jpg";
import two from "../../asset/IT_1.jpg";
import three from "../../asset/contractor1.jpg";
import { HeroSlider } from "./HeroSlider";


const CarouselHero = () => {
    const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
    const imgs = [
        { url: one, text: "Agro Allied Services" },
        { url: four, text: "Import and Export" },
        { url: two, text: "IT Service Solution" },
        { url: three, text: "General Contractor" },

    ];

    return (
        <div ref={ref} className="relative  overflow-hidden">
            <HeroSlider slides={imgs} />
            <div className="absolute lg:w-[60%] w-[80%] top-[30%] z-10 left-[10%] lg:left-[20%]">
                <motion.h1 ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.4 }} className="lg:text-7xl text-5xl font-extrabold leading-tight text-center text-blue-100 z-20  opacity-50 hidden">Your premier partner in Agro-allied, Import and Export, and IT Solutions</motion.h1>
            </div>
        </div>
    );
};

export default CarouselHero;


