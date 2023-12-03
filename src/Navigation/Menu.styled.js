import styled from '@emotion/styled';

export const MenuContent = styled.div`
  position: absolute;
  top: 36px;
  right: 50%;
  width: 100%;
  height: calc(100vh - 72px);
  max-width: 320px;
  padding: 24px;

  background: ${props => props.theme.colors.menuBackground};
  transform: translate(50%);
  border-radius: 25px;

  @media screen and (${props => props.theme.devices.tablet}) {
    top: 42px;
    right: 30px;
    transform: translate(0);
    height: calc(100vh - 82px);
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    top: 30px;
    right: 100px;
    transform: translate(0);
    height: calc(100vh - 60px);
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: start;

  min-width: 56px;
  color: ${props => props.theme.colors.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  transition: color ${props => props.theme.baseTransition};
  cursor: pointer;
  fill: ${props => props.theme.colors.white};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    fill: ${props => props.theme.colors.accent};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-top: 24px;

  border-top: 1px solid ${props => props.theme.colors.white};

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-top: 16px;
  }
`;

export const NavigationItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  letter-spacing: -0.96px;
  color: ${props => props.theme.colors.white};
  fill: white;

  transition: color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    fill: ${props => props.theme.colors.accent};
  }
`;
