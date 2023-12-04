import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (${props => props.theme.devices.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    grid-gap: 48px;
  }
`;

export const Item = styled.li`
  min-height: 197px;
  padding: 12px;
  background-color: ${props => props.theme.colors.grayBackground};

  @media screen and (${props => props.theme.devices.tablet}) {
    &:nth-of-type(3) {
      grid-row-start: 2;
      grid-column-start: 3;
    }
    &:nth-of-type(4) {
      grid-row-start: 2;
      grid-column-start: 4;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding: 48px 24px;
    min-height: 339px;
  }

  svg {
    fill: ${props => props.theme.colors.primary};

    @media screen and (${props => props.theme.devices.tablet}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  align-items: center;

  margin-bottom: 46px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 57px;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.accent};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    margin-bottom: 64px;
    &::after {
      top: 75px;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    margin-bottom: 119px;
    &::after {
      top: 142px;
    }
  }
`;

export const Title = styled.h3`
  font-family: 'Oswald';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(24 / 16);
  text-transform: uppercase;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 18px;
    line-height: calc(24 / 18);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 32px;
    line-height: calc(48 / 32);
  }
`;

export const Description = styled.p`
  font-size: 14px;
  letter-spacing: -0.56px;
  text-align: justify;

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
