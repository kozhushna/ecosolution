import { Container } from 'App.styled';
import {
  ContentWrapper,
  HeroSection,
  HeroTitle,
  Image,
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

          <picture>
            <source
              srcSet={`${require('../../images/wind-turbine-desktop.jpg')} 1x,
                        ${require('../../images/wind-turbine-desktop@2x.jpg')} 2x`}
              media="(min-width: 1440px)"
              width="1240"
              height="524"
            />

            <source
              srcSet={`${require('../../images/wind-turbine-tablet.jpg')} 1x,
                        ${require('../../images/wind-turbine-tablet@2x.jpg')} 2x`}
              media="(min-width: 768px)"
              width="708"
              height="348"
            />

            <source
              srcSet={`${require('../../images/wind-turbine-mobile.jpg')} 1x,
                        ${require('../../images/wind-turbine-mobile@2x.jpg')} 2x`}
              media="(max-width: 768px)"
              width="320"
              height="200"
            />

            <Image
              src={`${require('../../images/wind-turbine-mobile.jpg')}`}
              alt="foto wind turbine"
              width="320"
              height="200"
            />
          </picture>
        </Container>
      </HeroSection>
    </>
  );
};
