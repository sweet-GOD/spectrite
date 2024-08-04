import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GiCommercialAirplane } from 'react-icons/gi'
import { GrCloudComputer } from 'react-icons/gr'
import { MdAgriculture } from 'react-icons/md'

const ChooseUs = () => {
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
    <section ref={ref} class="bg-gray-100 py-12">
  <div class="container mx-auto px-4 lg:w-10/12">
  
    <motion.h2 ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.4, delay: 0.4 }} class="text-3xl font-bold text-center text-[#0276b6] mb-8">Why Choose Us</motion.h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      
     
      <motion.div ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.6 }} class="bg-white shadow-lg rounded-lg text-center flex flex-col items-center p-6">
      <MdAgriculture className='text-[#0276b6]' size={40} />
        <h3 class="text-2xl font-semibold text-[#0276b6]  mb-4">Agro-Allied </h3>
        <p class="text-gray-700">At Spectrite International Limited, our Agro-Allied division is dedicated to promoting sustainable farming practices. We offer top-quality agricultural products to meet the increasing global demand.</p>
      </motion.div>
      
      
      <motion.div ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.9, delay: 0.9 }} class="bg-white shadow-lg rounded-lg text-center flex flex-col items-center p-6">
        <GiCommercialAirplane className='text-[#0276b6]' size={40} />
        <h3 class="text-2xl font-semibold text-[#0276b6] mb-4">Import and Export</h3>
        <p class="text-gray-700">Our Import and Export services streamline international trade, ensuring efficient and reliable delivery of goods across borders. We connect markets and facilitate smooth transactions, contributing to the global economy.</p>
      </motion.div>
      
      
      <motion.div ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 1.2, delay: 1.2 }} class="bg-white shadow-lg rounded-lg text-center flex flex-col items-center p-6">
        <GrCloudComputer className='text-[#0276b6]' size={40} />
        <h3 class="text-2xl font-semibold text-[#0276b6] mb-4">IT Solutions</h3>
        <p class="text-gray-700">We provide cutting-edge IT solutions tailored to meet the unique needs of businesses. From software development to IT consulting, our experts deliver solutions that drive growth and efficiency.</p>
      </motion.div>
    </div>
  </div>
</section>

  )
}

export default ChooseUs