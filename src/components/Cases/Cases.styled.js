import styled from '@emotion/styled';
import { SectionTitle } from 'App.styled';

export const Title = styled(SectionTitle)`
  position: relative;
  max-width: 319px;
  margin-bottom: 24px;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 272px;
    margin-bottom: 38px;

    &::after {
      content: '';
      position: absolute;
      left: 82px;
      bottom: 0;
      width: 100%;
      height: 65px;
      border-right: 1px solid ${props => props.theme.colors.accent};
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 365px;
    margin-bottom: 120px;

    &::after {
      left: 254px;
      height: 96px;
    }
  }
`;

export const ControlWrapper = styled.div`
  position: relative;
`;
