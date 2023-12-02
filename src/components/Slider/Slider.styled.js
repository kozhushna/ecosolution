import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SlideList = styled(Swiper)`
  @media screen and (${props => props.theme.devices.tablet}) {
  }
`;

export const SlideItem = styled(SwiperSlide)`
  max-width: 320px;

  background-color: ${props => props.theme.colors.grayBackground};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 596px;
  }
`;

export const SlideImage = styled.img`
  @media screen and (${props => props.theme.devices.tablet}) {
    width: 342px;
    height: 168px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: 596px;
    height: 296px;
  }
`;

export const SlideTitle = styled.h3`
  max-width: 175px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.72px;

  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 194px;
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 357px;
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const SlideDescription = styled.p``;

export const SlideDate = styled.p``;

export const GoLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
  transition: background-color ${props => props.theme.baseTransition},
    fill ${props => props.theme.baseTransition};

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.primary};
    fill: ${props => props.theme.colors.accent};
  }
`;

export const ContentWrapper = styled.div`
  padding: 24px 12px 12px 12px;

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 36px 48px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 21px;
  border-bottom: 1px solid ${props => props.theme.colors.accent};

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 16px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 24px;
    padding-bottom: 36px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  letter-spacing: -0.48px;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const ButtonsHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SwiperControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 19px;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    gap: 120px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 193px;
  }
`;

export const PagingInfo = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
  text-align: left;
  .swiper-pagination-current {
    color: ${props => props.theme.colors.primary};
  }
`;

export const ButtonNav = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.primary};
  transition: border-color ${props => props.theme.baseTransition},
    fill ${props => props.theme.baseTransition};

  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.accent};
    fill: ${props => props.theme.colors.accent};
  }
`;
