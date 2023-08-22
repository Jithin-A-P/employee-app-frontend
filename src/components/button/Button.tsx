import { FC } from 'react';
import './styles.css';

export type ButtonPropsType = {
  style: 'primary' | 'secondary' | 'library' | 'notify' | 'book-history' | 'logout';
  text: string;
  onClick?: (e?) => void;
};

const Button: FC<ButtonPropsType> = ({ style, text, onClick }) => {
  return (
    <button className={`button ${style}-button`} onClick={onClick} data-testid='button-test'>
      {text}
    </button>
  );
};

export default Button;
