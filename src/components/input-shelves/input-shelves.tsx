import { FC, SyntheticEvent } from 'react';
import './styles.css';

export type InputShelfPropsType = {
  value: string | number;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  placeholder: string;
};

const ShelfInput: FC<InputShelfPropsType> = ({ value, onChange, type, label, placeholder }) => {
  return (
    <div className='shelf-input-div'>
      <label className='input-label'>{label}</label>
      <input
        className='shelf-input-field'
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ShelfInput;
