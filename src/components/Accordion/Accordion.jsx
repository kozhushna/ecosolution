import { useState } from 'react';
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
          <TitleWrapper onClick={() => toggle(index)}>
            <Title>{question}</Title>
            <span>{selected === index ? '-' : '+'}</span>
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
