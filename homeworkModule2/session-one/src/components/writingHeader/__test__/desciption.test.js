import { render, screen } from '@testing-library/react';
import App from "../../../App"


test('header tester', () => {
    render(<App />);
    const pleaseLogin = screen.getByText(/Please login/i);
    const Login = screen.getByText(/Login/i);
    const Logo = screen.getByRole('link', {name: /Wynnie's/i});
    expect(pleaseLogin).toBeInTheDocument();
    expect(Login).toBeInTheDocument();
    expect(Logo).toBeInTheDocument();
  });
  
  test('Description tester', async () => {
    render(<App />);
    const Header = screen.getByRole('heading', {name: /Wynnie's/i});
    const description = screen.getByText(/Lorem ipsum dolor sit/i);
    await expect(Header).toBeInTheDocument();
    await expect(description).toBeInTheDocument();
  });