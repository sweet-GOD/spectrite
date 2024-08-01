import React from 'react'
import { Link } from 'react-router-dom'

const ContactHome = () => {
  return (
    <section class="bg-gray-50 py-12">
  <div class="container mx-auto px-4 lg:w-10/12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <div class="space-y-6 p-2 md:p-0">
        <h2 class="text-3xl font-bold text-green-600">Get in Touch</h2>
        <p class="text-gray-700">We’d love to hear from you! Whether you have a question about our services, want to discuss a potential project, or just want to learn more about Spectrite International Limited, our team is ready to assist you.</p>
        <p class="text-gray-700">Feel free to reach out via phone, email, or visit us at our office. We’re committed to providing excellent customer service and will respond to your inquiries as soon as possible.</p>
        <Link to={"/contact"} class="inline-block bg-green-600 text-white font-semibold py-3 px-10 rounded-full shadow hover:bg-green-700 transition duration-300">Contact Us</Link>
      </div>
      
      
      <div class="text-center md:text-right">
        <img src={require("../../asset/getintouch.jpg")} alt="Get in touch" class="w-full h-auto" />
      </div>
    </div>
  </div>
</section>

  )
}

export default ContactHome