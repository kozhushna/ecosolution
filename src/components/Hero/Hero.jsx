import { Container } from 'App.styled';
import {
  ContentWrapper,
  HeroSection,
  HeroTitle,
  Link,
  Text,
  TextWrapper,
} from './Hero.styled';
import { ContactInfo } from 'components/ContactInfo/ContactInfo';

export const Hero = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <ContentWrapper>
            <HeroTitle>Renewable energy for any task</HeroTitle>
            <TextWrapper>
              <Text>
                Development and implementation of renewable non-polluting energy
                sources, generating power generation using energy wind, sun,
                water, biomass
              </Text>
              <Link href="google.com">Learn more</Link>
            </TextWrapper>
          </ContentWrapper>
          <ContactInfo />
        </Container>
      </HeroSection>
    </>
  );
};
