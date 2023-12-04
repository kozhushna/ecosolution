import styled from '@emotion/styled';
import { SectionTitle } from 'App.styled';

export const Title = styled(SectionTitle)`
  max-width: 319px;
  margin-bottom: 24px;
  text-align: left;

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 272px;
    margin-bottom: 0;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 365px;
  }
`;

export const ContentWrapper = styled.div``;
