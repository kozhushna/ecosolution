import { NavigationLink } from './NavigationLink';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  CloseButton,
  ContentWrapper,
  MenuContent,
  NavigationItem,
  NavigationList,
} from './Menu.styled';
import { Sosial } from 'components/Sosial/Sosial';

export const Menu = ({ close }) => {
  return (
    <MenuContent>
      <CloseButton type="button" aria-label="Close menu" onClick={close}>
        <div>
          <Svg w={20} h={20} icon="close" />
        </div>

        <span>close</span>
      </CloseButton>
      <ContentWrapper>
        <nav>
          <NavigationList>
            <NavigationItem>
              <NavigationLink text="Main" url="#hero" />
            </NavigationItem>
            <NavigationItem>
              <NavigationLink text="About" url="#values" />
            </NavigationItem>
            <NavigationItem>
              <NavigationLink text="Cases" url="#cases" />
            </NavigationItem>
            <NavigationItem>
              <NavigationLink text="FAQ" url="#faq" />
            </NavigationItem>
            <NavigationItem>
              <NavigationLink text="Contact Us" url="#contacts" />
            </NavigationItem>
          </NavigationList>
        </nav>

        <Sosial place="menu" />
      </ContentWrapper>
    </MenuContent>
  );
};
