import { FC } from 'react';
import './styles.css';

export type ButtonPropsType = {
  style: 'primary' | 'secondary';
  text: string;
  onClick: () => void;
};

const Button: FC<ButtonPropsType> = ({ style, text, onClick }) => {
  return (
    <button className={`${style}-button`} onClick={onClick} data-testid='button-test'>
      {text}
    </button>
  );
};

export default Button;
