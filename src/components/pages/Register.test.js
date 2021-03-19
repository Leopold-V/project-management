import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-canvas-mock';
import { Register } from './Register';

afterEach(cleanup);

it('render login page', () => {
  render(<BrowserRouter><Register /></BrowserRouter>);
  let title = screen.getByText('Welcome on');
  expect(title).toBeInTheDocument();
});
