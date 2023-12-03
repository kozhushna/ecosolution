import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SlideList = styled(Swiper)`
  @media screen and (${props => props.theme.devices.tablet}) {
  }
`;

export const SlideItem = styled(SwiperSlide)`
  display: grid;
  grid-template-rows: auto 1fr auto;

  max-width: 320px;
  min-height: 318px;
  background-color: ${props => props.theme.colors.grayBackground};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
    min-height: 322px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 596px;
    min-height: 506px;
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

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 24px 12px 0 12px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 16px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 36px 48px 0 48px;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 12px;
  letter-spacing: -0.48px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 12px;
    max-width: 296px;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 14px;
    letter-spacing: -0.56px;

    &::before {
      max-width: 318px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 24px 48px 36px 48px;
    font-size: 16px;
    letter-spacing: -0.64px;

    &::before {
      left: 48px;
      max-width: 500px;
    }
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
    top: 6px;
    right: 0;
    gap: 120px;
    margin-bottom: 0;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 193px;
    top: 24px;
  }
`;

export const PagingInfo = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
  text-align: left;
  span {
    color: ${props => props.theme.colors.gray};
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
