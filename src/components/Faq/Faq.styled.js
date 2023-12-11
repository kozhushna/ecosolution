import styled from '@emotion/styled';
import { SectionTitle } from 'App.styled';

export const Title = styled(SectionTitle)`
  max-width: 319px;

  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 272px;
    margin-bottom: 0;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 365px;
  }
`;

export const ContentWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: grid;
    column-gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;

    grid-template-areas:
      'accordion title'
      'accordion contactus';
    .title {
      grid-area: title;
    }
    .accordion {
      grid-area: accordion;
    }
    .contact-us {
      grid-area: contactus;
      grid-row: title / contactus;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      gap: 22px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    column-gap: 185px;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 150px;
  height: max-content;
  padding: 10px 16px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 500px;
  transition: color ${props => props.theme.baseTransition},
    background-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.primary};
  }

  &:hover div,
  &:focus div {
    background-color: ${props => props.theme.colors.accent};
    fill: ${props => props.theme.colors.primary};
  }
`;

export const SvgWrapper = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  rotate: 180deg;

  fill: ${props => props.theme.colors.accent};

  transition: fill ${props => props.theme.baseTransition},
    background-color ${props => props.theme.baseTransition};
`;

export const Text = styled.p`
  font-size: 18px;
  letter-spacing: -0.72px;

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
