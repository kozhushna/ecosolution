import { useForm } from 'react-hook-form';

import {
  ContentWrapper,
  ErrorText,
  Form,
  Input,
  Label,
  SendButton,
  SvgWrapper,
  TextWrapper,
  Textarea,
} from './ContactForm.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <ContentWrapper>
      <Form
        onSubmit={handleSubmit(data => {
          console.log(data);
          reset();
        })}
      >
        <TextWrapper>
          <Label>* Full name: </Label>
          <Input
            className={errors.name ? 'error' : ''}
            type="text"
            {...register('name', {
              required: {
                value: true,
                message: 'Please enter your full name',
              },
              pattern: {
                value: /^[^-\s][A-Za-zА-ЯЄIЇа-яєiї' ]+$/gm,
                message: 'Wrong Fullname',
              },
            })}
            placeholder="John Rosie"
          />

          {errors.name?.message && (
            <ErrorText>{errors.name?.message}</ErrorText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Label>* E-mail: </Label>
          <Input
            type="text"
            {...register('email', {
              required: {
                value: true,
                message: 'Please enter your email address',
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Wrong Email',
              },
            })}
            placeholder="johnrosie@gmail.com"
          />
          {errors.email?.message && (
            <ErrorText>{errors.email?.message}</ErrorText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Label>* Phone: </Label>
          <Input
            type="text"
            {...register('phone', {
              required: {
                value: true,
                message: 'Please enter your phone',
              },
              minLength: 12,
              maxLength: 12,
            })}
            placeholder="380961234567"
          />

          {errors.phone?.message && (
            <ErrorText>{errors.phone?.message}</ErrorText>
          )}

          {errors.phone && errors.phone.type === 'maxLength' && (
            <ErrorText>Wrong Phone</ErrorText>
          )}

          {errors.phone && errors.phone.type === 'minLength' && (
            <ErrorText>Wrong Phone</ErrorText>
          )}
        </TextWrapper>
        <TextWrapper>
          <Label>Message:</Label>
          <Textarea
            {...register('message')}
            type="text"
            placeholder="Your message"
          />
        </TextWrapper>

        <SendButton type="submit">
          Send
          <SvgWrapper>
            <Svg w={16} h={16} icon="arrow-right" />
          </SvgWrapper>
        </SendButton>
      </Form>
    </ContentWrapper>
  );
};
