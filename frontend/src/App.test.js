import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app entry header', () => {
  render(<App />);
  const headerElement = screen.getByText(/SecureShop/i);
  expect(headerElement).toBeInTheDocument();
});
