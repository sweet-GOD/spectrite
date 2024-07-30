import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
        <div ref={ref} className="flex flex-col items-center justify-center p-10">
            <motion.h1
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.4 }}
                className=" text-3xl  font-bold text-center my-2"
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
                className=" lg:text-4xl text-4xl  font-bold text-center my-2"
            >
                SPECTRITE INTERNATIONAL LIMITED.
            </motion.h1>
            <img className="w-52 h-10 rotate-180 mt-2 p-0" src={require("../../asset/peanuts.png")} alt="" />

            <div className="grid md:grid-cols-2 gap-10 lg:w-10/12 mx-auto pt-20">
                <motion.h1 ref={ref}
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.4 }} className="text-lg leading-relaxed">We're passionate about modernizing agriculture. Our team of experts in dedicated to bringing latest technology to farming industry. With years of experience, we're committed to providing best solutions for farmers.</motion.h1>
                <img src={require("../../asset/logo.jpg")} alt="" />
            </div>
        </div>
    )
}

export default Welcome