import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world text', () => {
    // * Arrange
    render(<Greeting />);

    // * Act 
    // * pretty much nothing here

    // * Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
});