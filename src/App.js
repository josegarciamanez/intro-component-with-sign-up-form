import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  return (
    <div className='container text-center'>
      <div className='row row-container'>
        <div className='column one-half d-flex-desktop'>
          <h3 className='mt-5'>Learn to code by watching others</h3>
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className='column one-half'>
          <div className='blue-card mt-3'>
            <div className='text-card'>
              <p>
                <strong>Try it free 7</strong> days then $20/mo. thereafter
              </p>
            </div>
          </div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Email cannot be empty';
              } else if (!values.firstName) {
                errors.firstName = 'Firts Name cannot be empty';
              } else if (!values.lastName) {
                errors.lastName = 'Last Name cannot be empty';
              } else if (!values.password) {
                errors.password = 'Password cannot be empty';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Looks like this is not an email';
              } else if (values.password.length < 8) {
                errors.password = 'Password almost 8 characters';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              resetForm({});
            }}>
            {({ errors, isSubmitting }) => (
              <Form className='white-card mt-2'>
                {errors.firstName ? (
                  <Field
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    style={{ border: '1px solid red' }}
                  />
                ) : (
                  <Field
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                  />
                )}
                <ErrorMessage
                  name='firstName'
                  component='h5'
                  style={{ color: 'red' }}
                />
                {errors.lastName ? (
                  <Field
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    style={{ border: '1px solid red' }}
                  />
                ) : (
                  <Field type='text' name='lastName' placeholder='Last Name' />
                )}
                <ErrorMessage
                  name='lastName'
                  component='h5'
                  style={{ color: 'red' }}
                />
                {errors.email ? (
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    style={{ border: '1px solid red' }}
                  />
                ) : (
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email Address'
                  />
                )}
                <ErrorMessage
                  name='email'
                  component='h5'
                  style={{ color: 'red' }}
                />
                {errors.password ? (
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    style={{ border: '1px solid red' }}
                  />
                ) : (
                  <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                )}
                <ErrorMessage
                  name='password'
                  component='h5'
                  style={{ color: 'red' }}
                />
                <button
                  className='submit'
                  type='submit'
                  disabled={isSubmitting}>
                  CLAIM YOUR FREE TRIAL
                </button>
                <p className='term-text'>
                  By clicking the button, you are agreeing to our{' '}
                  <strong>Terms and Services</strong>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <footer>
        <p className='attribution'>
          Challenge by{' '}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            target='_blank'
            rel='noopener noreferrer'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a
            href='https://josegarciamanez.github.io/'
            target='_blank'
            rel='noopener noreferrer'>
            @josegarciamanez
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
