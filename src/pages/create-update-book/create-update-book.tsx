import { BaseSyntheticEvent, useEffect, ChangeEvent, useState } from 'react';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import Input from '../../components/input/Input';
import './styles.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import ShelfInput from '../../components/input-shelves/input-shelves';
import Select from '../../components/select/Select';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import {
  useCreateBookMutation,
  useDeleteBookMutation,
  useEditBookMutation,
  useGetBookQuery,
  useGetCategoryListQuery,
  useUploadBookMutation
} from '../../api-client/book-api';
import { useGetShelflistQuery } from '../../api-client/shelf-api';
import DeleteEntityPopup from '../../components/delete-employee-popup/DeleteEmployeePopup';
import Popup from '../../components/popup/Popup';
import { toast } from 'react-toastify';

const CreateUpdateBook = () => {
  const [book, setBook] = useState({
    isbn: '',
    title: '',
    author: '',
    category: '',
    shelves: [],
    publisher: '',
    description: '',
    releaseDate: '',
    thumbnailUrl: ''
  });

  const { data: shelvesReponse } = useGetShelflistQuery('');
  const shelfOptions = shelvesReponse?.data.map((item) => ({
    id: item.shelfCode,
    name: item.shelfCode
  }));

  const { data: categoryResponse, isSuccess: categoriesReceived } = useGetCategoryListQuery('');
  const categories = categoryResponse?.data.map((item) => ({ id: item, name: item }));

  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [uploadBoxVisible, setUploadBoxVisible] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const [createBook, { isError: createBookError, isSuccess: createBookSuccess }] =
    useCreateBookMutation();

  const handleCreateBook = () => {
    createBook(book);
  };

  const [editBook, { isError: editBookError, isSuccess: editBookSuccess }] = useEditBookMutation();

  const handleEditBook = () => {
    editBook({ id: id, body: book });
  };

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id) => {
    deleteBook(id);
    navigate('/library/books');
  };

  const handleShelfChange = (e, idx, property) => {
    const shelves = book.shelves;

    shelves[idx] = {
      ...shelves[idx],
      [property]: property === 'bookCount' ? parseInt(e.target.value) : e.target.value
    };

    setBook((prevBook) => ({
      ...prevBook,
      shelves: shelves
    }));
  };

  const notifySuccess = (action: string) => toast.success(`Successfully ${action} Book!`);
  const notifyError = (error: string) => toast.error(error);
  const [file, setFile] = useState(null);
  const [uploadFile] = useUploadBookMutation();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return;
    const filedata = new FormData();

    filedata.append('data', file, file.name);
    uploadFile(filedata);
    navigate('/library/books');
  };

  const { data: responseBook, isSuccess: responseBookReceived } = useGetBookQuery(id);

  useEffect(() => {
    if (responseBookReceived)
      setBook({
        ...responseBook?.data,
        shelves: responseBook?.data?.shelves.map((item) => ({
          shelfCode: item.shelfCode,
          bookCount: item.availableBookCount
        }))
      });
  }, [responseBook]);

  useEffect(() => {
    if (categoriesReceived) setBook((prevBook) => ({ ...prevBook, category: categories[0].name }));
  }, [categoryResponse]);

  useEffect(() => {
    if (createBookSuccess) {
      setTimeout(() => {
        notifySuccess('created');
      }, 100);
      navigate('/library/books');
    } else if (createBookError) {
      setTimeout(() => {
        notifyError("New Book couldn't be created");
      }, 100);
      navigate('/library/books');
    } else if (editBookSuccess) {
      setTimeout(() => {
        notifySuccess('edited');
      }, 100);
      navigate('/library/books');
    } else if (editBookError) {
      setTimeout(() => {
        notifyError("Book couldn't be edited");
      }, 100);
      navigate('/library/books');
    }
  }, [editBookError, editBookSuccess, createBookError, createBookSuccess]);

  return (
    <HomeLayout>
      {id ? (
        <SubHeader title='Edit Book'>
          <MaterialIconButton
            icon='assets/icons/delete.svg'
            text='Delete Book'
            onClick={() => setPopupIsVisible(true)}
          />
        </SubHeader>
      ) : (
        <SubHeader title='Add Book'>
          <MaterialIconButton
            icon='assets/icons/excel.svg'
            text='Upload Excel'
            onClick={() => setUploadBoxVisible(true)}
          />
        </SubHeader>
      )}

      <div className='create-book-form'>
        {id ? (
          <div className='form-input'>
            <Input type='text' value={book.isbn} label='Book ISBN *' placeholder='Book ISBN' />
          </div>
        ) : (
          <div className='form-input'>
            <Input
              type='text'
              value={book.isbn}
              onChange={(e: any) => {
                setBook((prevBook) => ({ ...prevBook, isbn: e.target.value }));
              }}
              label='Book ISBN *'
              placeholder='Book ISBN'
            />
          </div>
        )}
        <div className='form-input'>
          <Input
            type='text'
            value={book.title}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, title: e.target.value }));
            }}
            label='Title *'
            placeholder='Title'
          />
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.author}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, author: e.target.value }));
            }}
            label='Author *'
            placeholder='Author'
          />
        </div>
        <div className='form-input'>
          {categories && (
            <Select
              value={book.category}
              onChange={(e: any) => {
                setBook((prevBook) => ({ ...prevBook, category: e.target.value }));
              }}
              label='Category'
              options={categories}
            />
          )}
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.description}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, description: e.target.value }));
            }}
            label='Description *'
            placeholder='Description'
          />
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.publisher}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, publisher: e.target.value }));
            }}
            label='Publisher'
            placeholder='Publisher'
          />
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.releaseDate}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, releaseDate: e.target.value }));
            }}
            label='Release Date'
            placeholder='Release Date'
          />
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.thumbnailUrl}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, thumbnailUrl: e.target.value }));
            }}
            label='Thumbnail URL'
            placeholder='Thumbnail URL'
          />
        </div>
        <div className='shelf-input-container-div'>
          <div className='label-button-div'>
            <label className='shelves-text'>Shelves</label>
            <div
              className='add-shelf-button'
              onClick={() => {
                setBook((prevBook) => ({
                  ...prevBook,
                  shelves: [...prevBook.shelves, { shelfCode: shelfOptions[0].name, bookCount: 1 }]
                }));
              }}
            >
              Add Shelf
            </div>
            <div
              className='delete-shelf-button'
              onClick={() => {
                setBook((prevBook) => {
                  prevBook.shelves.pop();

                  return { ...prevBook };
                });
              }}
            >
              Delete Shelf
            </div>
          </div>
          {shelfOptions &&
            book.shelves.map((shelf, idx) => (
              <>
                <div className='shelf-input-div'>
                  <div className='half-size'>
                    {shelf?.shelfCode && (
                      <Select
                        value={shelf?.shelfCode}
                        onChange={(e: BaseSyntheticEvent) => handleShelfChange(e, idx, 'shelfCode')}
                        key={shelf?.shelfCode}
                        label='Shelf Code'
                        options={shelfOptions}
                      />
                    )}
                  </div>
                  <div className='half-size'>
                    {shelf?.bookCount !== undefined && (
                      <ShelfInput
                        value={shelf?.bookCount}
                        onChange={(e: BaseSyntheticEvent) => handleShelfChange(e, idx, 'bookCount')}
                        key={`${shelf?.shelfCode}_count`}
                        type='number'
                        placeholder='Book Count'
                      />
                    )}
                  </div>
                </div>
              </>
            ))}
        </div>
        <div className='form-button-book'>
          {id ? (
            <Button style='primary' text='Save' onClick={handleEditBook} />
          ) : (
            <Button style='primary' text='Create' onClick={handleCreateBook} />
          )}
          <Button
            style='secondary'
            onClick={() => {
              navigate(-1);
            }}
            text='Cancel'
          />
        </div>
      </div>
      <DeleteEntityPopup
        isVisible={popupIsVisible}
        entity='book'
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
        handleDelete={() => {
          handleDelete(id);
        }}
      />
      <Popup
        isVisible={uploadBoxVisible}
        setIsVisible={(isVisible) => {
          setUploadBoxVisible(isVisible);
        }}
      >
        <div className='upload-box-container'>
          <div className='upload-popup-title'>Choose excel file</div>
          <input className='upload-popup-choose-file' type='file' onChange={handleFileChange} />
          <div>{file && `${file.name}`}</div>
          <div className='upload-popup-buttons'>
            <Button style='primary' onClick={handleUpload} text='Upload' />
            <Button
              style='secondary'
              onClick={() => {
                setUploadBoxVisible(false);
              }}
              text='Cancel'
            />
          </div>
        </div>
      </Popup>
    </HomeLayout>
  );
};

export default CreateUpdateBook;
