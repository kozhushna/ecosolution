import { Container, Section, SectionTitle } from 'App.styled';
import { Sosial } from 'components/Sosial/Sosial';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  ContactCaption,
  ContactItem,
  ContactLink,
  Contactlist,
  ContentHolder,
} from './ContactUs.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const ContactUs = () => {
  return (
    <Section id="contacts">
      <Container>
        <SectionTitle>Contact us</SectionTitle>
        <ContentHolder>
          <Contactlist>
            <ContactItem>
              <ContactCaption>Phone:</ContactCaption>

              <ContactLink href="tel:+380981234567">
                <Svg w={24} h={24} icon="call" />
                38 (098) 12 34 567
              </ContactLink>

              <ContactLink href="tel:+380931234567">
                <Svg w={24} h={24} icon="call" />
                38 (093) 12 34 567
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactCaption>E-mail:</ContactCaption>

              <ContactLink href="mailto:office@ecosolution.com">
                <Svg w={24} h={24} icon="sms" />
                office@ecosolution.com
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactCaption>Address:</ContactCaption>

              <ContactLink
                href="https://maps.app.goo.gl/eabvF4ZeJ3889H5v9"
                target="_blank"
                rel="noopener noreferrer nofollow "
              >
                <Svg w={24} h={24} icon="map" />
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactCaption>Social Networks:</ContactCaption>
              <Sosial place="contact" />
            </ContactItem>
          </Contactlist>
          <ContactForm />
        </ContentHolder>
      </Container>
    </Section>
  );
};
