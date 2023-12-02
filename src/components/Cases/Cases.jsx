import { Container, Section } from 'App.styled';
import { Title } from './Cases.styled';
import { Slider } from './Slider';

export const Cases = () => {
  return (
    <Section>
      <Container>
        <Title>Successful cases of our company</Title>
        <Slider />
      </Container>
    </Section>
  );
};
