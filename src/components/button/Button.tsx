import { FC } from 'react';
import './styles.css';

type ButtonPropsType = {
  type: string;
  text: string;
  onClick: () => void;
};

const Button: FC<ButtonPropsType> = ({ type, text, onClick }) => {
  return (
    <button className={`${type}-button`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
