import { Container } from 'App.styled';
import { Logo } from 'components/Logo/Logo';
import { FooterContainer, UpLink } from './Footer.styled';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';
import { Sosial } from 'components/Sosial/Sosial';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Logo />
        <Sosial />
        <ContactInfo place="footer" />
        <UpLink href="#hero" aria-label="Go to main">
          <Svg w={16} h={16} icon="arrow-top" />
        </UpLink>
      </FooterContainer>
    </Container>
  );
};
