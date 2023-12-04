import { useForm } from 'react-hook-form';

import {
  ContentWrapper,
  ErrorText,
  Form,
  Input,
  Textarea,
} from './ContactForm.styled';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <ContentWrapper>
      <Form
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
        <label>* Full name: </label>
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

        {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}

        <label>* E-mail: </label>
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

        <label>* Phone: </label>
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

        <label>Message:</label>
        <Textarea type="text" placeholder="Your message" />

        <button type="submit">Send</button>
      </Form>
    </ContentWrapper>
  );
};
