import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  padding: 24px 0;
  border-top: 1px solid ${props => props.theme.colors.accent};

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 40px 0;
  }
`;

export const UpLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 32px;
  max-height: 32px;
  padding: 8px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.accent};
  fill: ${props => props.theme.colors.primary};
  transition: background-color ${props => props.theme.baseTransition} fill
    ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.primary};
    fill: ${props => props.theme.colors.accent};
  }
`;
