import styled from '@emotion/styled';
import { SectionTitle } from 'App.styled';

export const Title = styled(SectionTitle)`
  position: relative;
  max-width: 319px;
  margin-bottom: 24px;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 272px;
    margin-bottom: 0;

    &::after {
      content: '';
      position: absolute;
      left: 82px;
      bottom: 0;
      width: 100%;
      height: 110px;
      border-right: 1px solid ${props => props.theme.colors.accent};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 365px;

    &::after {
      left: 254px;
      height: 87px;
    }
  }
`;

export const Text = styled.p`
  margin-bottom: 36px;
  text-align: justify;
  letter-spacing: -0.64px;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
    margin-bottom: 0;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 459px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 122px;
  }
`;

export const ListWrapper = styled.div`
  position: relative;
`;

export const ImageRight = styled.img`
  display: none;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
  }
`;

export const ImageLeft = styled.img`
  display: none;

  @media screen and (${props => props.theme.devices.tablet}) {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
  }
`;
