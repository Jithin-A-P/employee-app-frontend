import { FC, SyntheticEvent } from 'react';
import './styles.css';

type InputPropsType = {
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  placeholder: string;
};

const Input: FC<InputPropsType> = ({ value, onChange, type, label, placeholder }) => {
  return (
    <div className='input-div'>
      {label !== '' && <label className='input-label'>{label}</label>}
      <input
        className='input-field'
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
