import styled from '@emotion/styled';

export const Contactlist = styled.ul`
  font-family: 'FiraSans';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  @media screen and (${props => props.theme.devices.tablet}) {
    display: flex;
  }
`;

export const ContactItem = styled.li`
  &:nth-of-type(1) {
    margin-bottom: 8px;
  }

  &:nth-of-type(3) {
    display: none;
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    &:nth-of-type(1) {
      margin-bottom: 0;
      margin-right: 77px;
    }

    &:nth-of-type(2) {
      margin-right: 49px;
    }

    &:nth-of-type(3) {
      display: inline;
    }
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    &:nth-of-type(1) {
      margin-right: 492px;
    }

    &:nth-of-type(2) {
      margin-right: 166px;
    }
  }
`;

export const ContactLink = styled.a`
  transition: color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;
