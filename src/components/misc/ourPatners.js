import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tw from "twin.macro";

const OurPatners = () => {
  const logos = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];

  const StyledSection = tw.section`
    py-12 dark:bg-gray-200 lg:py-[100px]
  `;

  const StyledHeading = tw.h3`
    mb-10 text-center text-2xl font-bold text-black dark:text-white lg:mb-12
  `;

  const StyledLogo = tw.img`
    mx-auto transition hover:scale-110
  `;

  return (
    <StyledSection>
      <StyledHeading>
        Used and <span tw="text-secondary-200">loved</span> by industry leaders
      </StyledHeading>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        direction="vertical"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <a href="/modern-saas#">
              <StyledLogo src={logo} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSection>
  );
};

export default OurPatners;
