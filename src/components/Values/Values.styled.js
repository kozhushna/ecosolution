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
  text-align: justify;
  letter-spacing: -0.64px;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 459px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;
