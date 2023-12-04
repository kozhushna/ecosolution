import { ContactItem, ContactLink, Contactlist } from './ContactInfo.styled';

export const ContactInfo = () => {
  return (
    <Contactlist>
      <ContactItem>
        <ContactLink
          href="https://maps.app.goo.gl/eabvF4ZeJ3889H5v9"
          target="_blank"
          rel="noopener noreferrer nofollow "
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactLink>
      </ContactItem>
      <ContactItem>
        <ContactLink href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </ContactLink>
      </ContactItem>
      <ContactItem>ecosolution © 2023</ContactItem>
    </Contactlist>
  );
};
