import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    test('renders hello world text', () => {
        // * Arrange
        render(<Greeting />);
    
        // * Act 
        // * pretty much nothing here
    
        // * Assert
        const helloWorldElement = screen.getByText('Hello World', { exact: false });
        expect(helloWorldElement).toBeInTheDocument();        
    });

    test('unchanged text', () => {
        render(<Greeting />);

        const unchangedTextElement = screen.getByText("It's good to see you!");
        expect(unchangedTextElement).toBeInTheDocument();
    });

    test('changed text', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const changedTextElement = screen.getByText('Changed!', { exact: false });
        expect(changedTextElement).toBeInTheDocument();
    });

    test('original text not visible if button is clicked', () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        const originalTextElement = screen.queryByText("It's good to see you!");
        expect(originalTextElement).toBeNull();

    });
});