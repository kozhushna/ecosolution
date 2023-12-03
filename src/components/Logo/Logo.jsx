import { Svg } from 'components/SvgIcon/SvgIcon';
import { LogoLink, LogoWrapper } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrapper>
      <Svg w={31} h={18} icon="logo"></Svg>
      <LogoLink href="#hero">ecosolution</LogoLink>

      <Svg w={60} h={18} icon="greenenergy"></Svg>
    </LogoWrapper>
  );
};
