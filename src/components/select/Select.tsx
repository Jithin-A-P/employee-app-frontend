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
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
