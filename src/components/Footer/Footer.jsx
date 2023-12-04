import { Container } from 'App.styled';
import { Logo } from 'components/Logo/Logo';
import {
  FooterContainer,
  LogoWrapper,
  SocialWrapper,
  UpLink,
} from './Footer.styled';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import { Sosial } from 'components/Sosial/Sosial';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <LogoWrapper>
          <Logo />
          <SocialWrapper>
            <Sosial place="footer-top" />
            <UpLink href="#hero" aria-label="Go to main">
              <Svg w={16} h={16} icon="arrow-top" />
            </UpLink>
          </SocialWrapper>
        </LogoWrapper>
        <Sosial place="footer-middle" />
        <ContactInfo place="footer" />
      </FooterContainer>
    </Container>
  );
};
