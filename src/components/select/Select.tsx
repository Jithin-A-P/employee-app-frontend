import { FC } from 'react';
import './styles.css';

type SelectPropsType = {
  value: string;
  onChange: (e: any) => void;
  label: string;
  options: any[];
  style?: 'library';
};

const Select: FC<SelectPropsType> = ({ value, onChange, label, options, style }) => {
  return (
    <div className='select-div'>
      {style == 'library' || label == 'Shelf Code' ? (
        <></>
      ) : (
        <label className='select-label'>{label}</label>
      )}
      <select className='select-field' onChange={onChange} value={value}>
        {label == 'Shelf Code' ? (
          <>
            {options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
          </>
        ) : (
          <option value={-1} key={label}>
            {style == 'library' ? `${label}` : `Choose ${label}`}
          </option>
        )}
      </select>
    </div>
  );
};

export default Select;
