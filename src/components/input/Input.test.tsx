import Input, { InputPropsType } from './Input';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Is the input working properly', () => {
  test('If label rendered correctly', () => {
    const inputProps: InputPropsType = {
      value: 'value',
      onChange: () => {},
      type: 'text',
      label: 'label',
      placeholder: 'placeholder'
    };

    render(<Input {...inputProps} />);

    const element = screen.getByTestId('input-test');

    expect(element).toHaveClass('input-div');
  });
});
