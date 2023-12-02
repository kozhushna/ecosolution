import styled from '@emotion/styled';

export const AccordionHolder = styled.div`
  text-align: justify;
  max-width: 320px;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 596px;
  }
`;

export const Item = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.accent};

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 24px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  svg {
    fill: ${props => props.theme.colors.accent};
  }

  &.show {
    svg {
      fill: ${props => props.theme.colors.primary};
    }
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 16px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 24px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Title = styled.h3`
  max-width: 296px;
  font-family: 'FiraSans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.72px;

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 298px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 544px;
  }
`;

export const Description = styled.div`
  &.content {
    padding-left: 28px;
    padding-top: 16px;
    font-size: 14px;
    letter-spacing: -0.56px;
    max-height: 0;
    overflow: hidden;
    /* transition: all 0.5s cubic-bezier(0, 1, 0, 1); */

    @media screen and (${props => props.theme.devices.desktop}) {
      padding-left: 52px;
      padding-top: 24px;
      font-size: 16px;
      letter-spacing: -0.64px;
    }
  }
  &.show {
    height: auto;
    max-height: 9999px;
    padding-bottom: 16px;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);

    @media screen and (${props => props.theme.devices.desktop}) {
      padding-bottom: 24px;
    }
  }
`;
