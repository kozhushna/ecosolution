import { Container, Section } from 'App.styled';
import { ContentWrapper, Text, Title } from './Values.styled';
import { ValueList } from './ValueList';

export const Values = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Title>Main values of our company</Title>
          <Text>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </Text>
        </ContentWrapper>
        <ValueList />
      </Container>
    </Section>
  );
};
