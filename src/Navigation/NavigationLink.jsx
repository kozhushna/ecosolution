import { Svg } from 'components/SvgIcon/SvgIcon';

export const NavigationLink = ({ text, url }) => {
  return (
    <>
      <a href={url}>{text}</a>
      <Svg w={16} h={16} icon="arrow-angle"></Svg>
    </>
  );
};
