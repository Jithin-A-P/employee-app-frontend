import { useEffect, useState } from 'react';
import Input from '../../components/input/Input';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './style.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useCreateShelfMutation,
  useDeleteShelfMutation,
  useEditShelfMutation,
  useGetShelfQuery
} from '../../api-client/shelf-api';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import DeleteEntityPopup from '../../components/delete-employee-popup/DeleteEmployeePopup';
import { toast } from 'react-toastify';

const CreateShelf = () => {
  const [shelf, setShelf] = useState({
    shelfCode: '',
    location: ''
  });

  const navigate = useNavigate();

  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [
    createShelf,
    { isSuccess: createShelfSucess, isError: createShelfError, error: createShelfErrorData }
  ] = useCreateShelfMutation();

  const [editShelf, { isError: editShelfError, isSuccess: editShelfSuccess }] =
    useEditShelfMutation();

  const handleCreateShelf = () => {
    createShelf(shelf);
  };

  const handleEditShelf = () => {
    console.log(shelf);
    editShelf({ id: id, body: shelf });
  };

  useEffect(() => {
    if (createShelfSucess) {
      setTimeout(() => {
        notifySuccess('created');
      }, 100);
      navigate('/library/shelves');
    } else if (createShelfError) {
      console.log(createShelfErrorData);
      setTimeout(() => {
        notifyError('Create Shelf Failed!');
      }, 100);
      navigate('/library/shelves');
    } else if (editShelfSuccess) {
      console.log('edit shelf sucess');
      setTimeout(() => {
        notifySuccess('edited');
      }, 100);
      navigate('/library/shelves');
    } else if (editShelfError) {
      setTimeout(() => {
        notifyError("Couldn't Edit Shelf!");
      }, 100);
      navigate('/library/shelves');
    }
  }, [createShelfError, createShelfSucess, editShelfSuccess, editShelfError]);

  const { id } = useParams();

  const { data: response, isSuccess } = useGetShelfQuery(id);

  const [deleteShelf] = useDeleteShelfMutation();

  const handleDelete = (id) => {
    deleteShelf(id);
    navigate('/library/shelves');
  };

  useEffect(() => {
    if (isSuccess) setShelf(response?.data);
  }, [response, isSuccess]);

  const notifySuccess = (action: string) => toast.success(`Successfully ${action} Shelf!`);
  const notifyError = (error: string) => toast.error(error);

  return (
    <HomeLayout>
      {id ? (
        <SubHeader title='Edit Book'>
          <MaterialIconButton
            icon='assets/icons/delete.svg'
            text='Delete Shelf'
            onClick={() => setPopupIsVisible(true)}
          />
        </SubHeader>
      ) : (
        <SubHeader title='Create Shelf' />
      )}

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
      <DeleteEntityPopup
        isVisible={popupIsVisible}
        entity='shelf'
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
        handleDelete={() => {
          handleDelete(id);
        }}
      />
    </HomeLayout>
  );
};

export default CreateShelf;
