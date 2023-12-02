import { useState } from 'react';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  AccordionHolder,
  Description,
  Item,
  Title,
  TitleWrapper,
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
    <AccordionHolder>
      {data.map(({ id, question, answer }, index) => (
        <Item key={id}>
          <TitleWrapper
            onClick={() => toggle(index)}
            className={selected === index ? 'show ' : ''}
          >
            {/* <span>{selected === index ? '-' : '+'}</span> */}
            <Svg
              icon={selected === index ? 'minus' : 'add'}
              w={16}
              h={16}
            ></Svg>
            <Title>{question}</Title>
          </TitleWrapper>
          <Description
            className={selected === index ? 'content show ' : 'content'}
          >
            {answer}
          </Description>
        </Item>
      ))}
    </AccordionHolder>
  );
};
