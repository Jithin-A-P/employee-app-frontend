import { FC, SyntheticEvent } from 'react';
import './styles.css';

export type InputPropsType = {
  value: string | number;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  placeholder: string;
  inactive?: string;
};

const Input: FC<InputPropsType> = ({ value, onChange, type, label, placeholder, inactive }) => {
  return (
    <div className='input-div' data-testid='input-test'>
      {label !== '' && <label className='input-label'>{label}</label>}
      <input
        className={`input-field ${inactive}`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        readOnly={inactive ? true : false}
      />
    </div>
  );
};

export default Input;
