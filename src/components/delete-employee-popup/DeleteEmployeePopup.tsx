import { FC } from 'react';
import './styles.css';
import Popup from '../popup/Popup';
import Button from '../button/Button';

type DeleteEmployeePopupPropsType = {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
};

const DeleteEmployeePopup: FC<DeleteEmployeePopupPropsType> = ({ isVisible, setIsVisible }) => {
  return (
    <Popup
      isVisible={isVisible}
      setIsVisible={(isVisible) => {
        setIsVisible(isVisible);
      }}
    >
      <div className='delete-poup-title'>Are you sure?</div>
      <div className='delete-employee-message'>Do you really want to delete employee ?</div>
      <div className='delete-employee-buttons'>
        <Button type='primary' onClick={() => {}} text='Confirm' />
        <Button
          type='secondary'
          onClick={() => {
            setIsVisible(false);
          }}
          text='Cancel'
        />
      </div>
    </Popup>
  );
};

export default DeleteEmployeePopup;
