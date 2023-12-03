import styled from '@emotion/styled';

export const AccordionList = styled.ul`
  text-align: justify;
  max-width: 320px;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 596px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 8px;
  padding: 16px 0;
  border-top: 1px solid ${props => props.theme.colors.accent};

  @media screen and (${props => props.theme.devices.tablet}) {
    gap: 16px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 24px;
    padding: 24px 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  &.show {
    gap: 16px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &.show {
      gap: 24px;
    }
  }
`;

export const SvgHolder = styled.div`
  fill: ${props => props.theme.colors.accent};
  cursor: pointer;
  &.show {
    fill: ${props => props.theme.colors.primary};
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Title = styled.h3`
  font-family: 'FiraSans';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.72px;
`;

export const Description = styled.div`
  &.content {
    font-size: 14px;
    letter-spacing: -0.56px;
    max-height: 0;
    overflow: hidden;
    transition: all ${props => props.theme.baseTransition};

    @media screen and (${props => props.theme.devices.desktop}) {
      font-size: 16px;
      letter-spacing: -0.64px;
    }
  }
  &.show {
    height: auto;
    max-height: 9999px;
    transition: all ${props => props.theme.baseTransition};
  }
`;
