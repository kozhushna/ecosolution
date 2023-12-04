import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  max-width: 320px;
  padding: 36px 12px;
  background-color: ${props => props.theme.colors.grayBackground};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 342px;
    padding: 36px 24px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    max-width: 596px;
    padding: 48px;
  }
`;

export const Input = styled.input`
  width: 100%;
  letter-spacing: -0.64px;
  color: ${props => props.theme.colors.primary};
  padding-bottom: 8px;
  background-color: ${props => props.theme.colors.grayBackground};

  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.accent};

  &.error {
    border-bottom: 2px solid ${props => props.theme.colors.validationError};
  }

  &:hover,
  :focus,
  :active {
    outline: 0;
  }

  @media screen and (${props => props.theme.devices.tablet}) {
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 91px;
  letter-spacing: -0.64px;
  color: ${props => props.theme.colors.primary};
  resize: none;
  background-color: ${props => props.theme.colors.grayBackground};

  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.accent};

  &.error {
    border-bottom: 2px solid ${props => props.theme.colors.validationError};
  }

  &:hover,
  :focus,
  :active {
    outline: 0;
  }
  @media screen and (${props => props.theme.devices.tablet}) {
    height: 137px;
    padding: 22px 24px;
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.validationError};
`;

export const FormTitle = styled.p`
  max-width: 255px;
  margin-bottom: 32px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.6px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};

  @media screen and (${props => props.theme.devices.tablet}) {
    max-width: 298px;
    margin-bottom: 40px;
    font-size: 24px;
    letter-spacing: -0.72px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
