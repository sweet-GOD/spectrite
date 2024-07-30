import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    A11y,
    EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const HeroSlider = ({ slides }) => {
    return (
        <Swiper
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
            modules={[Navigation, Autoplay,Pagination, A11y, EffectCreative]}
            spaceBetween={50}
            slidesPerView={1}
            
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i} className="relative ">
                    <div className="w-full h-full absolute top-0 left-0 bg-[#33333381] "></div>
                    <img className="h-[60vh] lg:h-[120vh] w-full " src={slide.url} alt="yy" />

                </SwiperSlide>
            ))}
        </Swiper>
    )
}
