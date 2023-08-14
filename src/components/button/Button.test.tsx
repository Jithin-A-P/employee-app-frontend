import Button, { ButtonPropsType } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
describe('Is the button working properly', () => {
  test('If label rendered correctly', () => {
    const buttonProps: ButtonPropsType = {
      style: 'primary',
      text: 'Button',
      onClick: jest.fn()
    };

    render(<Button {...buttonProps} />);

    const element = screen.getByTestId('button-test');

    expect(element).toHaveTextContent('Button');
  });

  test('If button has correct stle', () => {
    const buttonProps: ButtonPropsType = {
      style: 'primary',
      text: 'Button',
      onClick: jest.fn()
    };

    render(<Button {...buttonProps} />);

    const element = screen.getByTestId('button-test');

    expect(element).toHaveClass('primary-button');
  });

  test('If onClick works', () => {
    const onClick = jest.fn();

    const buttonProps: ButtonPropsType = {
      style: 'primary',
      text: 'Button',
      onClick: onClick
    };

    render(<Button {...buttonProps} />);

    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });

  test('If snapshot rendered', () => {
    const onClick = jest.fn();

    const buttonProps: ButtonPropsType = {
      style: 'primary',
      text: 'Button',
      onClick: onClick
    };

    const element = render(<Button {...buttonProps} />);

    expect(element).toMatchSnapshot();
  });
});
