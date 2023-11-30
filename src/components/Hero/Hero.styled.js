import styled from '@emotion/styled';
import { Section } from 'App.styled';

export const HeroSection = styled(Section)`
  padding: 146px 0 36px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 164px 0 100px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 200px 0 120px;
  }
`;

export const HeroTitle = styled.h1`
  max-width: 320px;
  margin-bottom: 24px;

  font-family: 'Oswald';
  font-weight: 400;
  font-size: 36px;
  line-height: 1;
  text-align: left;
  text-transform: uppercase;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 300px;
    margin-bottom: 0;
    font-size: 48px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 485px;
    font-size: 64px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;

  text-align: justify;
  letter-spacing: -0.64px;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
    text-align: left;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    min-width: 363px;
  }
`;

export const Link = styled.a`
  display: inline-block;
  /* justify-content: center;
  align-items: center;
  gap: 12px; */

  width: 100%;
  max-width: 141px;

  padding: 4px 4px 4px 16px;

  font-family: 'FiraSans';
  font-size: 16px;
  font-style: normal;
  line-height: calc(18 / 16);
  letter-spacing: -0.64px;

  border: 1px solid ${props => props.theme.colors.accent};

  border-radius: 500px;
`;

export const ContentWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    justify-content: space-between;
    gap: 65px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    display: flex;
    /* justify-content: space-between; */
    gap: 296px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
