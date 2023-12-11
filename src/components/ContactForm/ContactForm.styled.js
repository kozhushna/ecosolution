import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  min-width: 320px;
  padding: 36px 12px;
  background-color: ${props => props.theme.colors.grayBackground};

  @media screen and (${props => props.theme.devices.tablet}) {
    min-width: 342px;
    padding: 36px 24px;
  }

  @media screen and (${props => props.theme.devices.desktop}) {
    min-width: 596px;
    padding: 48px;
  }
`;

export const Label = styled.label`
  letter-spacing: -0.64px;
  text-align: left;
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
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (${props => props.theme.devices.desktop}) {
    gap: 12px;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  letter-spacing: -0.48px;
  text-align: right;
  color: ${props => props.theme.colors.validationError};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: max-content;
  height: max-content;
  margin-left: auto;
  padding: 8px 8px 8px 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(18 / 16);
  letter-spacing: -0.64px;

  background-color: ${props => props.theme.colors.mainBackground};
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 500px;
  transition: color ${props => props.theme.baseTransition},
    background-color ${props => props.theme.baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const SvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 50%;

  fill: ${props => props.theme.colors.primary};
`;
