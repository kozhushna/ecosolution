import styled from '@emotion/styled';
import { SectionTitle } from 'App.styled';

export const Title = styled(SectionTitle)`
  position: relative;
  max-width: 286px;
  margin: 0 auto 96px;

  &::after {
    content: '';
    position: absolute;
    top: 80px;
    right: 50%;
    width: 100%;
    height: 48px;
    border-right: 1px solid ${props => props.theme.colors.accent};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 368px;
    margin-bottom: 135px;

    &::after {
      top: 96px;
      height: 87px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 491px;
    margin-bottom: 120px;

    &::after {
      top: 112px;
    }
  }
`;

export const TextNumber = styled.p`
  color: ${props => props.theme.colors.accent};
  text-align: center;
  font-family: 'Oswald';
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 100px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 164px;
  }
`;

export const SpanText = styled.span`
  text-align: center;
  font-family: 'Oswald';
  font-size: 24px;
  line-height: 1;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 28px;
    line-height: calc(48 / 28);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 48px;
    line-height: 1;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 24px;
  }
`;
