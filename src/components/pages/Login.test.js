import { BrowserRouter } from 'react-router-dom';
import { fireEvent, cleanup, render, screen } from '@testing-library/react';
import 'jest-canvas-mock';
import { Login } from './Login';

afterEach(cleanup);

it('render login page', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  let title = screen.getByText('Sign in');
  expect(title).toBeInTheDocument();
});

it('fill login with wrong password', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@gmail.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'testtes' } });
  fireEvent.click(screen.getByText('Login'));
  await screen.findByText('The password is invalid or the user does not have a password.');
  cleanup();
});

it('fill login with wrong email', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'tes@gmail.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'testtest' } });
  fireEvent.click(screen.getByText('Login'));
  await screen.findByText('There is no user record corresponding to this identifier. The user may have been deleted.');
  cleanup();
});

it('fill login with good credentials', async () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@gmail.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'testtest' } });
  fireEvent.click(screen.getByText('Login'));
  await screen.findByText('Successfully Login 🔥');
  cleanup();
});
