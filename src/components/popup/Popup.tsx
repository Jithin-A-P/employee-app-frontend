import { FC } from 'react';
import './styles.css';

type PopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  children: any;
};

const Popup: FC<PopupPropsType> = ({ isVisible, setIsVisible, children }) => {
  const close = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div onClick={close} className='popup'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='popup-container'
      >
        {children}
        <button className='close-button' onClick={close}>
          X
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
