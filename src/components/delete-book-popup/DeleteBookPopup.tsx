import { FC } from 'react';
import Popup from '../popup/Popup';
import Button from '../button/Button';
import './style.css';

type DeleteBookPopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  handleDelete: () => void;
};

const DeleteBookPopup: FC<DeleteBookPopupPropsType> = ({
  isVisible,
  setIsVisible,
  handleDelete
}) => {
  return (
    <Popup
      isVisible={isVisible}
      setIsVisible={(isVisible) => {
        setIsVisible(isVisible);
      }}
    >
      <div className='delete-poup-title'>Are you sure?</div>
      <div className='delete-employee-message'>Do you really want to delete Book ?</div>
      <div className='delete-employee-buttons'>
        <Button style='primary' onClick={handleDelete} text='Confirm' />
        <Button
          style='secondary'
          onClick={() => {
            setIsVisible(false);
          }}
          text='Cancel'
        />
      </div>
    </Popup>
  );
};

export default DeleteBookPopup;
