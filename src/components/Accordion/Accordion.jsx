import { useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  AccordionList,
  Description,
  Item,
  SvgHolder,
  TextWrapper,
  Title,
} from './Accordion.styled';

export const Accordion = ({ data, selectedIndex }) => {
  const [selected, setSelected] = useState(selectedIndex);
  const toggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  return (
    <AccordionList>
      {data.map(({ id, question, answer }, index) => (
        <Item key={id}>
          <SvgHolder
            className={selected === index ? 'show ' : ''}
            onClick={() => toggle(index)}
          >
            <Svg
              icon={selected === index ? 'minus' : 'add'}
              w={16}
              h={16}
            ></Svg>
          </SvgHolder>
          <TextWrapper
            onClick={() => toggle(index)}
            className={selected === index ? 'show ' : ''}
          >
            <Title>{question}</Title>
            <Description
              className={selected === index ? 'content show ' : 'content'}
            >
              {answer}
            </Description>
          </TextWrapper>
        </Item>
      ))}
    </AccordionList>
  );
};
