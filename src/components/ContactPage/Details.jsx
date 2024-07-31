import React, { useEffect, useRef, useState } from "react";
import { useAnimation, useInView } from "framer-motion";

import emailjs from "@emailjs/browser";

const Details = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [btnloading, setBtnLoading] = useState(false);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setBtnLoading(true);

    try {
      emailjs.send(
        "service_qhbu5jq",
        "template_rga82u6",
        {
          Subject: "New message from your website!!!",
          message: text,

          To: "info@spectriteltd.com",

          From: email,
        },
        "zLVjgUqhChoBKcfcE"
      );

      setTimeout(() => {

          setBtnLoading(false);
          alert("Message sent successfully.")
          setText("");
          setEmail("");
        }, 3000)
    } catch (error) {
        console.log(error);
        alert("Error sending message" + error)
    }

  };
  return (
    <div ref={ref} className="min-h-screen p-6 lg:w-9/12 mx-auto ">

      <div className="">
        <div className="flex flex-col lg:gap-20 gap-10">
          

          
          
            <div className="w-full lg:w-10/12 mx-auto rounded-2xl shadow bg-gray-50 text-black">
              <form onSubmit={HandleSubmit} className="flex flex-col p-8 gap-8">
                <div>
                  <h1 className="text-2xl mb-4">Hi 👋! my email is...</h1>
                  <label className="input input-bordered flex bg-[#ffffff3b] items-center gap-2">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      className="grow "
                      placeholder="johndoe@gmail.com"
                      required
                    />
                  </label>
                </div>
                {/* ******** */}
                
                {/* ******** */}
                <div>
                  <h1 className="text-2xl mb-4">I'd love to ask about...</h1>
                  <textarea
                    rows={3}
                    placeholder="Whatever your heart desires :)"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    className="textarea textarea-bordered  bg-[#ffffff3b] textarea-lg w-full "
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary text-lg">
                  {btnloading ? (
                    <span className="loading loading-bars loading-sm bg-blue-950"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>

          
          <div className="responsive-map  overflow-hidden">

          <iframe title="m" className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.0446865753383!2d-76.75874112482948!3d39.181255471664855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7e175504a1d1d%3A0x91d885ca6ac64350!2s7031%20Mount%20Holly%20Wy%2C%20Elkridge%2C%20MD%2021075%2C%20USA!5e1!3m2!1sen!2sng!4v1722437092321!5m2!1sen!2sng" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Details;
