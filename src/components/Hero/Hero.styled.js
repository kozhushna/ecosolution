import styled from '@emotion/styled';
import { Section } from 'App.styled';

export const HeroSection = styled(Section)`
  padding-top: 24px;
  /* padding: 24px 0 36px 0; */

  @media screen and (${props => props.theme.devices.tablet}) {
    /* padding: 52px 0 100px 0; */
    padding-top: 52px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 78px;
    /* padding: 78px 0 120px 0; */
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
    min-width: 485px;
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
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.accent};

  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    gap: 65px;
    padding-bottom: 26px;
    margin-bottom: 16px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 296px;
    padding-bottom: 28px;
    margin-bottom: 12px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    flex-direction: column;
    padding-bottom: 26px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
  }
`;

export const Image = styled.img`
  display: block;
  margin: 36px auto 0;

  @media screen and (${props => props.theme.devices.tablet}) {
    margin: 40px auto 0;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin: 36px auto 0;
  }
`;
