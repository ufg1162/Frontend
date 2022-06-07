
import { render, screen } from '@testing-library/react';
import MenuBar from './component/menubar';

test('renders learn react link', () => {

  render(<MenuBar />);
  const navbar = screen.getByTestId('menubar-element')
  expect(navbar).toBeInTheDocument();

});