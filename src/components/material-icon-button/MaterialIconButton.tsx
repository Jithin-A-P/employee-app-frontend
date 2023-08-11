import { FC } from 'react';
import './styles.css';

type ButtonPropsType = {
  icon: string;
  text: string;
  onClick: () => void;
};

const MaterialIconButton: FC<ButtonPropsType> = ({ icon, text, onClick }) => {
  return (
    <button className='material-icon-button' onClick={onClick}>
      <div className='icon-button-container'>
        <img src={icon} alt='Icon' />
      </div>
      <div className='material-icon-button-text'>{text}</div>
    </button>
  );
};

export default MaterialIconButton;
