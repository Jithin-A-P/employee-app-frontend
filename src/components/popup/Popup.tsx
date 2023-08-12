import { FC } from 'react';
import './styles.css';

type PopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  children: any;
};

const Popup: FC<PopupPropsType> = ({ isVisible, setIsVisible, children }) => {
  return isVisible ? (
    <div className='popup'>
      <div className='popup-container'>
        {children}
        <button
          className='close-button'
          onClick={() => {
            setIsVisible(false);
          }}
        >
          X
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
