import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: ${props => props.theme.colors.mainBackground};
  padding-bottom: 36px;
  /* &[id] {
    &::before {
      content: '';
      display: block;
      height: 62px;
      margin-top: -62px;
      @media screen and (${props => props.theme.devices.tablet}) {
        height: 80px;
        margin-top: -80px;
      }
    }
  } */

  @media screen and (${props => props.theme.devices.tablet}) {
    padding-bottom: 100px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    padding-bottom: 120px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  text-align: center;

  @media screen and (${props => props.theme.devices.mobile}) {
    width: ${props => props.theme.sizes.mobile}px;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
    width: ${props => props.theme.sizes.tablet}px;
    padding: 0 30px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    width: ${props => props.theme.sizes.desktop}px;
    padding: 0 100px;
  }
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  font-family: 'Oswald';
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (${props => props.theme.devices.tablet}) {
    font-size: 36px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    font-size: 48px;
  }
`;
