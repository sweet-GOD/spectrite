import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Welcome = () => {
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
        <div ref={ref} className="flex flex-col md:items-center  justify-center p-10">
            <motion.h1
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.4 }}
                className=" text-3xl  font-bold text-center  my-2"
            >
                Welcome to
            </motion.h1>
            <motion.h1
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" lg:text-4xl text-4xl text-green-600 font-bold text-center my-2"
            >
                SPECTRITE INTERNATIONAL LIMITED.
            </motion.h1>
            <img className="w-52 h-10 rotate-180 mt-2 p-0 mx-auto" src={require("../../asset/peanuts.png")} alt="" />

            <div className="grid md:grid-cols-2 gap-10 lg:w-10/12 mx-auto lg:pt-20 pt-10 text-center md:text-start">
                <motion.h1 ref={ref}
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.4 }} className="text-xl leading-relaxed text-justify">With a passion for innovation and excellence, we bridge the gap between agricultural advancements and technology. Our agro-allied division focuses on sustainable farming practices, providing top-quality products to meet the growing global demand. <Link to={"/about"} className="text-blue-500 mt-2 btn-sm">Learn more <FaChevronRight className="inline" /> </Link></motion.h1>
                
                <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.4 }} >

                <img src={require("../../asset/logo.jpg")} alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default Welcome