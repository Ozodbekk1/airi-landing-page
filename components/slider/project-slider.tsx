/** @format */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import { projects } from "@/data";

export default function ProjectSlider() {
  return (
    <section className='py-32 bg-[#05070A]' id='projects'>
      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-16'>Active Projects</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className='pb-16'>
          {projects.map((p) => (
            <SwiperSlide key={p.id}>
              <div className='h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-all group'>
                <span className='text-blue-500 text-xs font-bold uppercase tracking-widest'>
                  {p.tag}
                </span>
                <h3 className='text-2xl font-bold mt-4 mb-4'>{p.title}</h3>
                <p className='text-gray-400 leading-relaxed mb-6'>
                  {p.description}
                </p>
                <div className='mt-auto pt-4 flex items-center text-sm font-bold text-white group-hover:gap-2 transition-all'>
                  Read More{" "}
                  <span className='opacity-0 group-hover:opacity-100 transition-opacity'>
                    →
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
