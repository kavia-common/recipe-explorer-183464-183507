import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and search', () => {
  render(<App />);
  expect(screen.getByText(/Recipe Explorer/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Search recipes/i)).toBeInTheDocument();
});
