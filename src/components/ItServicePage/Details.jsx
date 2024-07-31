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
                className=" lg:text-4xl text-4xl  font-bold text-justify my-2"
            >
                Import and Export


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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl text-justify leading-relaxed">Spectrite specializes in Import and export which is the backbone of international trade, enabling countries to expand their markets, access a broader array of goods and services, and foster economic growth. <br /> <br />The dynamics of importing and exporting involve a complex interplay of policies, logistics, and market strategies that influence global commerce.</motion.h1>
                <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} >

                <img src={require("../../asset/import2.jpg")} alt="" />
                </motion.div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 lg:w-10/12 mx-auto ">
                <div><motion.h1
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" lg:text-3xl text-3xl  font-bold md:text-start text-center my-2 mt-10"
            >
                Definition and Scope
            </motion.h1>
            <img className="w-52 h-10 hidden rotate-180 mt-2 p-0" src={require("../../asset/peanuts.png")} alt="" />

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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base  leading-relaxed text-justify">Importing refers to the process of buying goods and services from foreign countries to be sold domestically. Conversely, exporting involves selling domestically produced goods and services to other countries. <br /> <br /> Both activities are critical for maintaining the balance of trade, meeting domestic demand, and supporting industries that rely on raw materials or finished products not available locally.</motion.h1>
                
            </div></div>
            {/* ********************** */}
                <div><motion.h1
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.4 }}
                className=" lg:text-3xl text-3xl  font-bold  text-justify my-2 mt-10"
            >
Importance of Import and Export
</motion.h1>
            <img className="w-52 h-10 hidden rotate-180 mt-2 p-0" src={require("../../asset/peanuts.png")} alt="" />

            <div className="lg:pt-4 pt-10 text-center md:text-start">
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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base  leading-relaxed text-justify">Economic Growth: International trade contributes significantly to a country’s GDP. Exporting allows businesses to reach wider markets, while importing provides access to necessary goods that might not be produced domestically. <br /><br />
                Diversification: Import and export activities enable countries to diversify their economic base. For instance, a country rich in minerals can export them and import food products, thus stabilizing its economy. <br /><br />
                Employment: Trade activities create jobs in various sectors including manufacturing, logistics, shipping, and retail. Export industries, in particular, can drive job creation by expanding production to meet global demand. <br /><br />
                Consumer Choice: Imports increase the variety of products available to consumers, often at competitive prices. This variety can lead to improved quality of life and increased consumer satisfaction.</motion.h1>
                
            </div></div>
            </div>
        </div>
    )
}

export default Details