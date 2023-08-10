import { FC, SyntheticEvent } from 'react';
import './styles.css';

type InputPropsType = {
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
};

const Input: FC<InputPropsType> = ({ value, onChange, type, label }) => {
  return (
    <div className='input-div'>
      <label className='input-label'>{label}</label>
      <input
        className='input-field'
        type={type}
        onChange={onChange}
        value={value}
        placeholder={label}
      />
    </div>
  );
};

export default Input;
