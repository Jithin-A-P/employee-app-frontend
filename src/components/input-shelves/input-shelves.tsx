import { FC, SyntheticEvent } from 'react';
import './styles.css';

export type InputShelfPropsType = {
  value?: string | number;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
};

const ShelfInput: FC<InputShelfPropsType> = ({ onChange, type, value, placeholder }) => {
  console.log('shelf');

  return (
    <input
      className='shelf-input-field'
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default ShelfInput;
