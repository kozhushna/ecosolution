import { Container, Section } from 'App.styled';
import { Title } from './Faq.styled';
import { Accordion } from 'components/Accordion/Accordion';
import { faqData } from 'utils/faqData';
import { HeaderLink, SvgWrapper } from 'components/Header/Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Faq = () => {
  return (
    <Section id="faq">
      <Container>
        <Title>Frequently Asked Questions</Title>
        <p>Didn't find the answer to your question? </p>
        <HeaderLink href="#contacts">
          Contact Us
          <SvgWrapper>
            <Svg w={14} h={14} icon="arrow-top" />
          </SvgWrapper>
        </HeaderLink>
        <Accordion data={faqData} selectedIndex={0} />
      </Container>
    </Section>
  );
};
