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
                className=" lg:text-4xl text-4xl  font-bold text-center text-[#0276b6] my-2"
            >
                About <br /> SPECTRITE INTERNATIONAL LIMITED
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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base text-justify leading-relaxed">Welcome to Spectrite International Limited, your premier partner in Agro-allied, Import and Export, and IT Solutions. <br /> <br /> With a passion for innovation and excellence, we bridge the gap between agricultural advancements and technology. Our agro-allied division focuses on sustainable farming practices, providing top-quality products to meet the growing global demand.<br /><br /> Our import and export services streamline the international trade process, ensuring efficient and reliable delivery of goods across borders. We connect markets and facilitate smooth transactions, contributing to the global economy.
                
</motion.h1>
                <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} >

                <img src={require("../../asset/slide1.jpg")} className="h-72 w-full" alt="" />
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
                In the realm of IT solutions, we offer cutting-edge technology services tailored to meet the unique needs of businesses. From software development to IT consulting, our team of experts delivers solutions that drive growth and efficiency.
                
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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base  leading-relaxed text-justify">At Spectrite, we are committed to sustainability, quality, and customer satisfaction. Join us on our journey to create a better, more connected world.
                </motion.h1>
                
            </div></div>
            </div>
        </div>
    )
}

export default Details