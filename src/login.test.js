import { render, screen } from '@testing-library/react';
import LoginPage from './component/LoginPage'

test('renders learn react link', () => {

  render(<LoginPage />);
  const loginform = screen.getByTestId('login-element')
  expect(loginform).toBeInTheDocument();

});