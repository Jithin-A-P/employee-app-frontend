import { FC, SyntheticEvent } from 'react';
import './styles.css';

type AnimatedInputPropsType = {
  value: string;
  onChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  placeholder?: string;
};

const AnimatedInput: FC<AnimatedInputPropsType> = ({ value, onChange, type, label }) => {
  return (
    <div className='animated-input-div'>
      <input
        id={`${label}-input`}
        className={`animated-input-field`}
        type={type}
        onChange={onChange}
        value={value}
        placeholder=''
      />
      {label !== '' && (
        <label className='animated-input-label' htmlFor={`${label}-input`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default AnimatedInput;
