import styled from '@emotion/styled';

export const Contactlist = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-size: 20px;
  letter-spacing: -0.8px;
  text-align: left;

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 32px;
  }
`;

export const ContactCaption = styled.p`
  font-size: 16px;
  letter-spacing: -0.64px;
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 16px;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  fill: ${props => props.theme.colors.primary};
  transition: color ${props => props.theme.baseTransition} fill
    ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    fill: ${props => props.theme.colors.accent};
  }
`;
