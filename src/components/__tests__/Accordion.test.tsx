import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Accordion from '../Accordion';

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Accordion', () => {
  const mockProps = {
    title: 'Test Title',
    summary: 'Test summary',
    details: ['Detail 1', 'Detail 2', 'Detail 3'],
  };

  it('renders accordion with title and summary', () => {
    render(<Accordion {...mockProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test summary')).toBeInTheDocument();
  });

  it('has correct accessibility attributes when closed', () => {
    render(<Accordion {...mockProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).toHaveAttribute('aria-controls');
  });

  it('expands and shows details when clicked', () => {
    render(<Accordion {...mockProps} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Detail 1')).toBeInTheDocument();
    expect(screen.getByText('Detail 2')).toBeInTheDocument();
    expect(screen.getByText('Detail 3')).toBeInTheDocument();
  });

  it('collapses when clicked again', () => {
    render(<Accordion {...mockProps} />);
    
    const button = screen.getByRole('button');
    
    // Expand
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    
    // Collapse
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('applies custom className', () => {
    const { container } = render(<Accordion {...mockProps} className="custom-class" />);
    
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
