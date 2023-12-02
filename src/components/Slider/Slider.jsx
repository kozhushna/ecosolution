import React, { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  ButtonNav,
  ButtonsHolder,
  ContentWrapper,
  DescriptionWrapper,
  GoLink,
  PagingInfo,
  SlideDate,
  SlideDescription,
  SlideImage,
  SlideItem,
  SlideList,
  SlideTitle,
  SwiperControl,
  TitleWrapper,
} from './Slider.styled';

export const Slider = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [togglePageInfo, setTogglePageInfo] = useState(false);
  const pagingInfo = useRef(null);

  useEffect(() => {
    updatePagingInfo();
  }, [togglePageInfo]);

  const updatePagingInfo = () => {
    const current = pagingInfo.current.children[0];
    const total = pagingInfo.current.children[1];

    if (current && total) {
      current.innerText = current.innerText.padStart(2, '0');
      total.innerText = total.innerText.padStart(2, '0');
    }
  };

  const handlePrevClick = () => {
    swiperRef.slidePrev();
  };
  const handleNextClick = () => {
    swiperRef.slideNext();
  };

  return (
    <>
      <SwiperControl>
        <PagingInfo ref={pagingInfo} className="paging-info"></PagingInfo>
        <ButtonsHolder>
          <ButtonNav
            type="button"
            aria-label="Go to previous slide"
            onClick={handlePrevClick}
          >
            <Svg w={36} h={36} icon={'arrow-left'}></Svg>
          </ButtonNav>
          <ButtonNav
            type="button"
            aria-label="Go to next slide"
            onClick={handleNextClick}
          >
            <Svg w={36} h={36} icon={'arrow-right'}></Svg>
          </ButtonNav>
        </ButtonsHolder>
      </SwiperControl>
      <SlideList
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        spaceBetween={24}
        breakpoints={{
          360: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1440: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        pagination={{ el: '.paging-info', type: 'fraction' }}
        loop={true}
        onSlideChange={() => setTogglePageInfo(!togglePageInfo)}
      >
        {data.map(el => {
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
            </SlideItem>
          );
        })}
      </SlideList>
    </>
  );
};
