import { Container, Section, SectionTitle } from 'App.styled';
import { Sosial } from 'components/Sosial/Sosial';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const ContactUs = () => {
  return (
    <Section id="contacts">
      <Container>
        <SectionTitle>Contact us</SectionTitle>
        <ul>
          <li>
            <p>Phone:</p>
            <Svg w={24} h={24} icon="call" />
            <a href="tel:+380981234567">38 (098) 12 34 567</a>
            <Svg w={24} h={24} icon="call" />
            <a href="tel:+380931234567">38 (093) 12 34 567</a>
          </li>
          <li>
            <p>E-mail:</p>
            <Svg w={24} h={24} icon="sms" />
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
          </li>
          <li>
            <p>Address:</p>
            <Svg w={24} h={24} icon="map" />
            <a
              href="https://maps.app.goo.gl/eabvF4ZeJ3889H5v9"
              target="_blank"
              rel="noopener noreferrer nofollow "
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
          </li>
          <li>
            <p>Social Networks:</p>
            <Sosial />
          </li>
        </ul>
      </Container>
    </Section>
  );
};
