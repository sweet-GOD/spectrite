import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Details = () => {
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
        <div ref={ref} className="flex flex-col items-center justify-center p-10">
            
            <motion.h1
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" lg:text-4xl text-4xl text-[#0276b6] font-bold text-center my-2"
            >
                General Contractors
            </motion.h1>
            <img className="w-52 h-10 rotate-180 mt-2 p-0" src={require("../../asset/peanuts.png")} alt="" />

            <div className="grid md:grid-cols-2 gap-10 lg:w-10/12 mx-auto lg:pt-20 pt-10 text-center md:text-start">
                <motion.h1 ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base text-justify leading-relaxed">At Spectrite International Limited, we pride ourselves on being your trusted general contractor, delivering exceptional construction services for residential, commercial, and industrial projects. <br /> <br /> With years of experience in the industry, we offer comprehensive solutions from initial planning and design to final construction and project management. Our skilled team is dedicated to ensuring each project is completed on time, within budget, and to the highest standards of quality.
<br /><br /> <span className="font-bold">We specialize in:</span>

                
</motion.h1>
                <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} >

                <img src={require("../../asset/contractor2.jpg")} className="h-72 w-full" alt="" />
                </motion.div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 lg:w-10/12 mx-auto ">
                <div>

            <div className="lg:pt-4  pt-10 text-center md:text-start">
                <motion.h1 ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl leading-relaxed"></motion.h1>
                <motion.h1 ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base  leading-relaxed text-justify">
                <span className="font-bold">Residential Construction:</span> Building dream homes with meticulous attention to detail. <br /><br />
                <span className="font-bold">Commercial Projects:</span> Constructing functional and aesthetically pleasing commercial spaces.
                
                </motion.h1>
                
            </div></div>
            {/* ********************** */}
                <div>
            <div className="lg:pt-4 pt-10 text-center md:text-start">
               
                <motion.h1 ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base  leading-relaxed text-justify"><span className="font-bold">Industrial Construction:</span> Developing robust facilities to meet industrial demands. <br /><br />
Our commitment to excellence, safety, and client satisfaction sets us apart. Let Spectrite turn your vision into reality with unparalleled craftsmanship and professionalism.
                </motion.h1>
                
            </div></div>
            </div>
        </div>
    )
}

export default Details