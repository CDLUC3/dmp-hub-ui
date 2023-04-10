import { render, screen } from '@testing-library/react';
import Dashboard from './index';
import '@testing-library/jest-dom';

describe('Dashboard', () => {
  it('renders the title', () => {
    render(<Dashboard />);
    const heading = screen.getByText("Dashboard page");
    expect(heading).toBeInTheDocument()
  });
});
