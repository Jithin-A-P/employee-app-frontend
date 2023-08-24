import { useState } from 'react';
import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './style.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateShelfMutation, useEditShelfMutation } from '../../api-client/shelf-api';
import { getResponseError } from '../../utils/error-formatter';

const CreateShelf = () => {
  const [shelf, setShelf] = useState({
    shelfCode: '',
    location: ''
  });

  const [Error, setError] = useState(null);

  const navigate = useNavigate();

  const handleCreateShelf = () => {
    console.log(shelf);
    createShelf(shelf);
  };

  // Error messages -------------------------->

  const handleEditShelf = () => {
    console.log(shelf);
    editShelf({ id: id, body: shelf })
      .unwrap()
      .catch((error) => {
        console.log(error);

        setError(getResponseError(error));
        console.log(Error);
        // issue = JSON.stringify(error.data.errors);

        // // SetErrorMessage(issue);

        // console.log('issue object : ', issue);
        // alert(
        //   `Edit Could not be performed! Check input values ! ${JSON.stringify(error.data.errors)}`
        // );
        // console.log(`error: ${error.status} ${JSON.stringify(error.data)}`);
        // console.log('testing  ' + JSON.stringify(error.data.errors['shelfCode']));
      });
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
