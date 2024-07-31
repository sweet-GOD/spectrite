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
                className=" lg:text-4xl text-4xl  font-bold text-center my-2"
            >
                IT Service Solution Provider
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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base text-justify leading-relaxed">Spectrite specializes in transforming comprehensive business ideas into a technical solution to suits customers and stakeholders <br /> <br /> Managed IT Services: Continuous monitoring and management of IT systems, ensuring optimal performance and minimizing downtime. <br /><br /> Cloud Services: Solutions for cloud computing, storage, and migration, enabling businesses to leverage the scalability and flexibility of cloud technologies.
                <br /><br />

                Cybersecurity: Protection of data and systems from cyber threats through advanced security measures, risk assessments, and incident response.</motion.h1>
                <motion.div ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.6, delay: 0.5 }} >

                <img src={require("../../asset/IT_2.jpg")} alt="" />
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
                Network Solutions: Design, implementation, and maintenance of robust and reliable network infrastructures.
                <br /><br />
                IT Consulting: Expert advice and strategic planning to align technology with business goals, enhancing efficiency and competitiveness.
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
                transition={{ duration: 0.6, delay: 0.5 }} className="text-xl lg:text-base  leading-relaxed text-justify">

Software Development: Custom software solutions tailored to meet specific business needs, improving productivity and workflows.

<br />
<br />
Technical Support: Responsive and effective technical support to resolve IT issues promptly, ensuring smooth business operations.
                </motion.h1>
                
            </div></div>
            </div>
        </div>
    )
}

export default Details