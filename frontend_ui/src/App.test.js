import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('default route renders pixel-locked Sign In iframe', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTitle(/Sign In/i)).toBeInTheDocument();
});

test('recipe app shell is available under /app with header and search', () => {
  render(
    <MemoryRouter initialEntries={['/app']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Recipe Explorer/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Search recipes/i)).toBeInTheDocument();
});
