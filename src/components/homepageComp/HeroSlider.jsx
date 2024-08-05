import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    A11y,
    EffectFlip,
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
                delay: 5000,
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
            modules={[Navigation, Autoplay, Pagination, A11y, EffectFlip]}
            spaceBetween={50}
            slidesPerView={1}

            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {slides.map((slide, i) => (
                <SwiperSlide key={i} className="relative ">
                    <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t  from-[#33333370] from-50% "></div>
                    <img className="h-[55vh] lg:h-[81vh] w-full " src={slide.url} alt="yy" />

                    <div className="absolute bottom-20 lg:right-20 right-10  items-center justify-between flex lg:w-5/12 gap-4">

                        <h1 className="md:text-8xl text-6xl font-bold leading-tight text-end text-gray-200  z-20  ">{slide.text}</h1>

                        <div className="bg-gray-200 lg:w-4 w-2 md:h-[200px] h-[120px] z-20"></div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
