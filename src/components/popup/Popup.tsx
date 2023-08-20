import { FC } from 'react';
import './styles.css';

type PopupPropsType = {
  style?: 'library';
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  children: any;
};

const Popup: FC<PopupPropsType> = ({ style, isVisible, setIsVisible, children }) => {
  const close = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div onClick={close} className='popup'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`popup-container popup-container-${style}`}
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
