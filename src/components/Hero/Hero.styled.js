import styled from '@emotion/styled';
import { Section } from 'App.styled';

export const HeroSection = styled(Section)`
  padding-top: 24px;

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-top: 52px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 152px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: max-content;
  height: max-content;
  padding: 8px 8px 8px 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 16);
  letter-spacing: -0.64px;

  background-color: ${props => props.theme.colors.mainBackground};
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 500px;
  transition: color ${props => props.theme.baseTransition} background-color
    ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.primary};
  }
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
