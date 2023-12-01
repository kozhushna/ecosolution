import { Container, Section } from 'App.styled';
import {
  ContentWrapper,
  SpanText,
  TextNumber,
  Title,
} from './Electricity.styled';

export const Electricity = () => {
  return (
    <Section>
      <Container>
        <Title>Electricity we produced for all time</Title>
        <ContentWrapper>
          <TextNumber>1.134.147.814</TextNumber>
          <SpanText>kWh</SpanText>
        </ContentWrapper>
      </Container>
    </Section>
  );
};
