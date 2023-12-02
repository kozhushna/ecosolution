import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  ContentWrapper,
  DescriptionWrapper,
  GoLink,
  SlideDate,
  SlideDescription,
  SlideImage,
  SlideItem,
  SlideList,
  SlideTitle,
  TitleWrapper,
} from './Slider.styled';
import { sliderData } from 'utils/sliderData';

export const Slider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  //   const [slidesCount, setSlidersCount] = useState();

  //   useEffect(() => {
  //     window.addEventListener('resize', handleScreenWidth);
  //     return () => window.removeEventListener('resize', handleScreenWidth);
  //   }, [slidesCount]);

  //   const handleScreenWidth = () => {
  //     if (window.innerWidth > 1199) {
  //       setSlidersCount(3);
  //     }
  //     if ((window.innerWidth < 1200) & (window.innerWidth > 767)) {
  //       setSlidersCount(2);
  //     }
  //     if (window.innerWidth < 767) {
  //       setSlidersCount(1);
  //     }
  //   };

  //   const initialSlidesCount = () => {
  //     if (slidesCount) {
  //       return slidesCount;
  //     }
  //     if (window.innerWidth > 1199) {
  //       return 3;
  //     }
  //     if ((window.innerWidth < 1200) & (window.innerWidth > 767)) {
  //       return 2;
  //     }
  //     if (window.innerWidth < 768) {
  //       return 1;
  //     }
  //   };

  const handlePrevClick = () => {
    swiperRef.slideTo(swiperRef.activeIndex - 1, 0);
  };
  const handleNextClick = () => {
    console.log(swiperRef.activeIndex);
    // let idx = swiperRef.activeIndex;
    // if (idx > 2) {
    //   idx = 0;
    // }
    swiperRef.slideTo(swiperRef.activeIndex + 1, 0);
  };
  return (
    <>
      <div className="pagination"></div>
      <div>
        <button type="button" onClick={handlePrevClick}>
          Prev
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
      {/* <div class="swiper-button-prev">p</div>
      <div class="swiper-button-next">n</div> */}
      <SlideList
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        spaceBetween={16}
        slidesPerView={2}
        // centeredSlides={true}
        // loop={true}
        pagination={{ el: '.pagination', type: 'fraction' }}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        // autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        // speed={1500}
        // navigation={true}
      >
        <>
          {sliderData.map(el => {
            return (
              <SlideItem key={el.id}>
                <picture>
                  <source srcSet={`${el.image}`} />
                  <SlideImage
                    src={el.image}
                    alt={`${el.description}`}
                    width={320}
                    height={168}
                  />
                </picture>
                <ContentWrapper>
                  <TitleWrapper>
                    <SlideTitle>{el.title}</SlideTitle>
                    <GoLink
                      ahref="http://example.com"
                      aria-label="Go to site"
                      target="_blank"
                    >
                      <Svg icon="arrow-angle" w={28} h={28}></Svg>
                    </GoLink>
                  </TitleWrapper>
                  <DescriptionWrapper>
                    <SlideDescription>{el.description}</SlideDescription>
                    <SlideDate>{el.date}</SlideDate>
                  </DescriptionWrapper>
                </ContentWrapper>
              </SlideItem>
            );
          })}
        </>
      </SlideList>
    </>
  );
};
