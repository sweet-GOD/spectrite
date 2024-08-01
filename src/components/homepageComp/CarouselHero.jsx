import React from "react";
import one from "../../asset/agro1.jpg";
import two from "../../asset/slide2.webp";
import three from "../../asset/slide3.webp";
import { HeroSlider } from "./HeroSlider";


const CarouselHero = () => {
    const imgs = [
        { url: one },
        { url: three },
        { url: two },

    ];

    return (
        <div className="relative  overflow-hidden">
            <HeroSlider slides={imgs} />
            <div className="absolute lg:w-[60%] w-[80%] top-[30%] z-10 left-[10%] lg:left-[20%]">
                <h1 className="lg:text-7xl text-5xl font-extrabold leading-tight text-center text-green-200 z-20 opacity-40 ">Your premier partner in Agro-allied, Import and Export, and IT Solutions</h1>
            </div>
        </div>
    );
};

export default CarouselHero;


