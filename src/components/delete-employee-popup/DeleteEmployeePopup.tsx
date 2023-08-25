import { FC } from 'react';
import Popup from '../popup/Popup';
import Button from '../button/Button';
import './styles.css';

type DeleteEntityPopupPropsType = {
  isVisible: boolean;
  entity: string;
  setIsVisible: (isVisible: boolean) => void;
  handleDelete: () => void;
};

const DeleteEntityPopup: FC<DeleteEntityPopupPropsType> = ({
  isVisible,
  entity,
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
      <div className='delete-employee-message'>Do you really want to delete {entity}?</div>
      <div className='delete-spacing'></div>
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

export default DeleteEntityPopup;
