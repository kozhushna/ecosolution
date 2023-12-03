import styled from '@emotion/styled';

export const HeaderSection = styled.header`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  padding-bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: ${props => props.theme.colors.mainBackground};

  &.scroll {
    background-color: ${props => props.theme.colors.backdrop};
    backdrop-filter: blur(2px);
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  height: 112px;
`;

export const HeaderLink = styled.a`
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
  transition: color ${props => props.theme.baseTransition};

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
`;
