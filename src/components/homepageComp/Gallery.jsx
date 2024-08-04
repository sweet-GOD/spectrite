import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import one from "../../asset/agro1.jpg";
import procure from "../../asset/agro2.jpg";
import fab from "../../asset/agro3.jpg";
import test from "../../asset/import1.jpg";
import brand from "../../asset/import2.jpg";
import log from "../../asset/IT_1.jpg";

const Gallery = () => {
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
  return (
    <div ref={ref} className="flex   text-[#0276b6]  relative gap-4 lg:gap-10 m-0 lg:px-20 px-4 my-0 overflow-hidden ">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0.5, x: 0 },
          visible: { opacity: 1, x: 0.5 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="h-full absolute hidden flex-col items-start justify-start gap-4 z-20 "
      >
        {/* <div className="h-[7vh] w-[1px] bg-gray-300 "></div>
        <h1 className="text-gray-300 text-xl lg:text-3xl font-light">02</h1> */}
        <div className="h-full  w-[1px] bg-gray-300 "></div>
      </motion.div>

      <div className="flex flex-col  w-full gap-y-2 lg:py-16 py-10">
        <div className="w-full">
          
          <div className="w-full flex flex-col lg:flex-row lg:items-center items-center gap-8 lg:gap-0 justify-center ">
            <motion.h1
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-5xl font-medium text-center lg:text-5xl "
            >
              Gallery
            </motion.h1>
          </div>
        </div>

        <div className="lg:mt-8 mt-10">
          <div className="grid grid-cols-2 md:gap-8 gap-4 lg:grid-cols-3">
            {services.map((item, i) => (
            
              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: `${item.duration}`, delay: `${item.duration}` }}
                className="overflow-hidden"
                key={i}
              >
                <div className="overflow-hidden h-48 md:h-60 shadow-lg ">

                <img src={item.img} className="w-full  hover:scale-125 transition ease-in-out duration-500 h-full " alt="" />
                </div>
                <div className="md:py-6 py-4 hidden ">
                  <h1>{item.title}</h1>
                </div>
              </motion.div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

const services = [
  {
    duration: 0.6,
    img: one,
    title: "Engineering",
  },
  {
    duration: 0.9,
    img: procure,
    title: "Procurement",
  },
  {
    duration: 1.2,
    img: fab,
    title: "Fabrication",
  },
  {
    duration: 1.5,
    img: test,
    title: "QC & Testing",
  },
  {
    duration: 1.8,
    img: brand,
    title: "Branding",
  },
  {
    duration: 2.1,
    img: log,
    title: "Logistics",
  },
];
