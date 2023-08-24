import { useState } from 'react';
import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './style.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateShelfMutation, useEditShelfMutation } from '../../api-client/shelf-api';

const CreateShelf = () => {
  const [shelf, setShelf] = useState({
    shelfCode: '',
    location: ''
  });
  const [shelfCodeError, setShelfCodeError] = useState(false);
  const [locationError, setlocationError] = useState(false);

  const navigate = useNavigate();

  const handleCreateShelf = () => {
    console.log(shelf);
    createShelf(shelf);
  };

  // Error messages -------------------------->

  const handleEditShelf = () => {
    console.log(shelf);
    if (shelf.shelfCode === '') setShelfCodeError(true);
    else setShelfCodeError(false);

    if (shelf.location === '') setlocationError(true);
    else setlocationError(false);
    editShelf({ id: id, body: shelf });
  };

  const [createShelf] = useCreateShelfMutation();
  const { id } = useParams();
  const [editShelf] = useEditShelfMutation();

  return (
    <HomeLayout>
      {id ? <SubHeader title='Edit Shelf' /> : <SubHeader title='Create Shelf' />}

      <div className='create-shelf-form'>
        <div className='input-rows'>
          <div className='form-input'>
            <Input
              type='text'
              value={shelf.shelfCode}
              onChange={(e: any) => {
                setShelf((prevShelf) => ({ ...prevShelf, shelfCode: e.target.value }));
              }}
              label='Shelf Code'
              placeholder='Shelf-Code'
            />
            {shelfCodeError && (
              <div className='login-error-message'>Field should not be empty </div>
            )}
          </div>
          <div className='form-input'>
            <Input
              type='text'
              value={shelf.location}
              onChange={(e: any) => {
                setShelf((prevShelf) => ({ ...prevShelf, location: e.target.value }));
              }}
              label='Shelf Location'
              placeholder='Shelf-location'
            />
            {locationError && <div className='login-error-message'>Field should not be empty </div>}
          </div>
        </div>
        <div>
          <div className='form-button'>
            {id ? (
              <Button style='primary' onClick={handleEditShelf} text='Edit' />
            ) : (
              <Button style='primary' onClick={handleCreateShelf} text='Create' />
            )}
            <Button
              style='secondary'
              onClick={() => {
                console.log('shelf created cancelled');
                navigate(-1);
              }}
              text='Cancel'
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateShelf;
