import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sanitizeString } from "../utils/utils";

const TestimonialSlider = ({ testimonialData }) => {
  const testimonialList = testimonialData.map((person) => {
    const image = person.image ? sanitizeString(person.image) : "/man.png";
    return {
      ...person,
      image,
    };
  });
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="md:h-[600px]"
    >
      {testimonialList &&
        testimonialList.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center h-full px-16 overflow-y-auto scrollbar-hide md:flex-row gap-x-8">
              <div
                className="w-full max-w-[300px] flex flex-col xl:justify-center items-center
                       						mx-auto relative xl:mx-0"
              >
                <div className="flex flex-col justify-center text-center">
                  <div className="mx-auto mb-2">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt="person"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.designation}
                  </div>
                </div>
              </div>
              <div
                className="flex-1 flex flex-col justify-center before:w-[1px] 
                						xl:before:bg-white/20 xl:before:absolute xl:before:left-0 
               							xl:before:h-[200px] relative xl:pl-20"
              >
                <div className="mb-4">
                  <FaQuoteLeft className="mx-auto text-4xl xl:text-6xl text-white/20 md:mx-0" />
                </div>
                <div className="text-center xl:text-lg md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TestimonialSlider;
