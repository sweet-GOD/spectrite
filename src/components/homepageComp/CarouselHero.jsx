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
        <div className="relative rounded-b-3xl overflow-hidden">
            <HeroSlider slides={imgs} />
            <div className="absolute w-[60%] top-[30%] z-10  left-[20%]">
                <h1 className="text-6xl font-extrabold leading-tight text-center text-white z-20">Your Partner in Agro-Allied Services, Import and Export, and IT Solutions.</h1>
            </div>
        </div>
    );
};

export default CarouselHero;


