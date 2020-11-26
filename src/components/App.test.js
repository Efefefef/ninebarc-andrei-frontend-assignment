import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome card header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Berlin ticket adviser/i);
  expect(linkElement).toBeInTheDocument();
});
