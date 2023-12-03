import { NavigationLink } from './NavigationLink';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  CloseButton,
  MenuContent,
  NavigationItem,
  NavigationList,
} from './Menu.styled';

export const Menu = ({ close }) => {
  return (
    <MenuContent>
      <CloseButton type="button" aria-label="Close menu" onClick={close}>
        <div>
          <Svg w={20} h={20} icon="close" />
        </div>

        <span>close</span>
      </CloseButton>
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
            <NavigationLink text="Contact Us" url="#faq" />
          </NavigationItem>
        </NavigationList>
      </nav>
    </MenuContent>
  );
};
