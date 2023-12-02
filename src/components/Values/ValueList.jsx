import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  Description,
  Item,
  List,
  Title,
  TitleWrapper,
} from './ValueList.styled';
import { valuesData } from 'utils/valuesData';

export const ValueList = () => {
  return (
    <List>
      {valuesData.map(({ id, icon, title, description }) => (
        <Item key={id}>
          <TitleWrapper>
            <Svg icon={icon} w={16} h={16}></Svg>
            <Title>{title}</Title>
          </TitleWrapper>
          <Description>{description}</Description>
        </Item>
      ))}
    </List>
  );
};
