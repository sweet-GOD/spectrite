import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from 'react-router-dom'

const ContactHome = () => {
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
    <section class="bg-gray-50 py-12">
  <div class="container mx-auto px-4 lg:w-10/12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      <div class="space-y-6 p-2 md:p-0">
        <motion.h2 ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.4 }} class="text-3xl font-bold text-[#0276b6]">Get in Touch</motion.h2>
        <motion.p ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.6 }} class="text-gray-700 text-xl">We’d love to hear from you! Whether you have a question about our services, want to discuss a potential project, or just want to learn more about Spectrite International Limited, our team is ready to assist you.</motion.p>
        <motion.p ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.7, delay: 0.7 }} class="text-gray-700 text-xl">Feel free to reach out via phone, email, or visit us at our office. We’re committed to providing excellent customer service and will respond to your inquiries as soon as possible.</motion.p>
        <Link to={"/contact"} class="inline-block bg-[#0276b6] text-white font-semibold py-3 px-10 rounded-full shadow hover:bg-[#045987] transition duration-300">Contact Us</Link>
      </div>
      
      
      <motion.div ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.4 }} class="text-center md:text-right">
        <img src={require("../../asset/getintouch.jpg")} alt="Get in touch" class="w-full h-auto" />
      </motion.div>
    </div>
  </div>
</section>

  )
}

export default ContactHome