import { Svg } from 'components/SvgIcon/SvgIcon';

export const NavigationLink = ({ text, url, closeMenu }) => {
  return (
    <>
      <a href={url} onClick={closeMenu}>
        {text}
      </a>
      <Svg w={16} h={16} icon="arrow-angle"></Svg>
    </>
  );
};
