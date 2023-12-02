import { Container, Section } from 'App.styled';
import { Title } from './Faq.styled';
import { Accordion } from 'components/Accordion/Accordion';
import { faqData } from 'utils/faqData';

export const Faq = () => {
  return (
    <Section>
      <Container>
        <Title>Frequently Asked Questions</Title>
        <Accordion data={faqData} selectedIndex={0} />
      </Container>
    </Section>
  );
};
