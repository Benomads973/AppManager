// src/components/RegisterForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/user/userSlice';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('org', data.org);
    formData.append('appname', data.appname);
    formData.append('logo', data.logo[0]);
    dispatch(registerUser(formData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('username')} placeholder="Username" />
      <input {...register('password')} type="password" placeholder="Password" />
      <input {...register('org')} placeholder="Organization" />
      <input {...register('appname')} placeholder="App Name" />
      <input {...register('logo')} type="file" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
