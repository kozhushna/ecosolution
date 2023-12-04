import { Svg } from 'components/SvgIcon/SvgIcon';
import { SosialItem, SosialLink, Sosiallist } from './Sosial.styled';

export const Sosial = ({ place }) => {
  return (
    <Sosiallist>
      <SosialItem>
        <SosialLink
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer nofollow "
          className={place}
        >
          <Svg w={24} h={24} icon="facebook" />
        </SosialLink>
      </SosialItem>
      <SosialItem>
        <SosialLink
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer nofollow "
          className={place}
        >
          <Svg w={24} h={24} icon="instagram" />
        </SosialLink>
      </SosialItem>
    </Sosiallist>
  );
};
