import { Container, Section } from 'App.styled';
import { ControlWrapper, Title } from './Cases.styled';
import { Slider } from './Slider';

export const Cases = () => {
  return (
    <Section>
      <Container>
        <ControlWrapper>
          <Title>Successful cases of our company</Title>
          <Slider />
        </ControlWrapper>
      </Container>
    </Section>
  );
};
