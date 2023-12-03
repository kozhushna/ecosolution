import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  transition: color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const LogoLink = styled.a`
  font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
  font-size: 33px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.32px;
`;
