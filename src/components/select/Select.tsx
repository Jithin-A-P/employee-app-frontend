import { FC } from 'react';
import './styles.css';

type SelectPropsType = {
  value: string;
  onChange: (e: any) => void;
  label: string;
  options: any[];
};

const Select: FC<SelectPropsType> = ({ value, onChange, label, options }) => {
  return (
    <div className='select-div'>
      <label className='select-label'>{label}</label>
      <select className='select-field' onChange={onChange} value={value}>
        <option value={-1} key={label}>{`Choose ${label}`}</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
