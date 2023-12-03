import { Container, Section } from 'App.styled';
import { ControlWrapper, Title } from './Cases.styled';
import { Slider } from '../Slider/Slider';
import { casesData } from 'utils/casesData';

export const Cases = () => {
  return (
    <Section id="cases">
      <Container>
        <ControlWrapper>
          <Title>Successful cases of our company</Title>
          <Slider data={casesData} />
        </ControlWrapper>
      </Container>
    </Section>
  );
};
