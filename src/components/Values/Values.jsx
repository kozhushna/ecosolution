import { Container, Section } from 'App.styled';
import {
  ContentWrapper,
  ImageLeft,
  ImageRight,
  ListWrapper,
  Text,
  Title,
} from './Values.styled';
import { ValueList } from './ValueList';

export const Values = () => {
  return (
    <Section id="values">
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

        <ListWrapper>
          <ValueList />
          <picture>
            <source
              srcSet={`${require('../../images/wind-farms-fields-desktop.jpg')}`}
              media="(min-width: 1440px)"
              width="596"
              height="339"
            />

            <source
              srcSet={`${require('../../images/wind-farms-fields-tablet.jpg')}`}
              media="(min-width: 768px)"
              width="342"
              height="197"
            />

            <ImageRight
              src={`${require('../../images/wind-farms-fields-tablet.jpg')}`}
              alt="two wokers on wind farms fields"
              width="342"
              height="197"
            />
          </picture>

          <picture>
            <source
              srcSet={`${require('../../images/man-worker-firld-by-solar-panels-desktop.jpg')}`}
              media="(min-width: 1440px)"
              width="596"
              height="339"
            />

            <source
              srcSet={`${require('../../images/man-worker-firld-by-solar-panels-tablet.jpg')}`}
              media="(min-width: 768px)"
              width="342"
              height="197"
            />

            <ImageLeft
              src={`${require('../../images/man-worker-firld-by-solar-panels-tablet.jpg')}`}
              alt="man worker firld by solar panels"
              width="342"
              height="197"
            />
          </picture>
        </ListWrapper>
      </Container>
    </Section>
  );
};
