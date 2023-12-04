import { Container, Section } from 'App.styled';
import {
  ContactLink,
  Title,
  SvgWrapper,
  Text,
  ContentWrapper,
  TextWrapper,
} from './Faq.styled';
import { Accordion } from 'components/Accordion/Accordion';
import { faqData } from 'utils/faqData';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const Faq = () => {
  return (
    <Section id="faq">
      <Container>
        <ContentWrapper>
          <Title className="title">Frequently Asked Questions</Title>

          <Accordion className="accordion" data={faqData} selectedIndex={0} />
          <TextWrapper className="contact-us">
            <Text>Didn't find the answer to your question? </Text>
            <ContactLink href="#contacts">
              Contact Us
              <SvgWrapper>
                <Svg w={14} h={14} icon="arrow-top" />
              </SvgWrapper>
            </ContactLink>
          </TextWrapper>
        </ContentWrapper>
      </Container>
    </Section>
  );
};
