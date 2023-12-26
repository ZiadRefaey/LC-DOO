import BlogCard from "../../../ui/BlogCard";
import Section from "../../../ui/Section";
import SectionTitle from "../../../ui/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export default function HomepageBlog() {
  return (
    <Section>
      <SectionTitle>Our Blog</SectionTitle>
      <p className="text-body-sm md:text-body-md lg:text-body-lg text-center mb-4">
        Check out our latest news with our blog posts
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        effect="coverflow"
        virtualTranslate={true}
        navigation
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        spaceBetween={50}
        slidesPerView={3}
      >
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}
