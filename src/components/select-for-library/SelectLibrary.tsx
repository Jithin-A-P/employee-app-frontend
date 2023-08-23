import { FC } from 'react';
import './style.css';

type SelectPropsType = {
  value: string;
  onChange: (e: any) => void;
  label: string;
  options: any[];
};

const SelectForLibrary: FC<SelectPropsType> = ({ value, onChange, label, options }) => {
  return (
    <div className='select-div-library'>
      <select className='select-field-library' onChange={onChange} value={value}>
        <option value={-1} key={label}>
          {`${label}`}
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForLibrary;
