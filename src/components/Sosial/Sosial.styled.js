import styled from '@emotion/styled';

export const Sosiallist = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SosialItem = styled.li``;

export const SosialLink = styled.a`
  fill: ${props => props.theme.colors.primary};
  transition: fill ${props => props.theme.baseTransition};

  &.menu {
    fill: ${props => props.theme.colors.white};
  }

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.accent};
  }
`;
