import { act, render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import 'jest-canvas-mock';

afterEach(cleanup);

it('render the application', async () => {
  act(() => {
    render(<App />);
  });
  let loading = screen.getByText('Loading application...');
  expect(loading).toBeInTheDocument();
  await screen.findByText('Login');
});
