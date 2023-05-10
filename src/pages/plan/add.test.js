import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddPlanPage from './add';

describe('Dashboard', () => {
  it('renders the title', () => {
    render(<AddPlanPage />);
    const add_text = screen.getByText("Add a Plan");
    expect(add_text).toBeInTheDocument()
  });
});
