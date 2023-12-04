import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 0;
  border-top: 1px solid ${props => props.theme.colors.accent};

  @media screen and (${props => props.theme.devices.tablet}) {
    padding: 40px 0;

    .footer-middle {
      display: none;
    }
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

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .footer-top {
    display: none;
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    .footer-top {
      display: flex;
    }
  }
`;

export const SocialWrapper = styled.div`
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
    gap: 254px;
    align-items: center;
  }

  @media screen and (${props => props.theme.devices.destop}) {
    display: flex;
    gap: 371px;
    align-items: center;
  }
`;
