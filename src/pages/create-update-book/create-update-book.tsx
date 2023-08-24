import { useEffect, useState } from 'react';
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
  useGetCategoryListQuery
} from '../../api-client/book-api';
import { useGetShelflistQuery } from '../../api-client/shelf-api';
import Book from '../../types/create-book-payload';
import DeleteEntityPopup from '../../components/delete-employee-popup/DeleteEmployeePopup';

const CreateUpdateBook = () => {
  const [book, setBook] = useState({
    isbn: '',
    title: '',
    author: '',
    category: '',
    shelves: [],
    // totalCount: '',
    // shelfCode: '',
    publisher: '',
    description: '',
    releaseDate: '',
    thumbnailUrl: ''
  });

  const { data: response, isSuccess } = useGetShelflistQuery('');
  const { data: categoryResponse, isSuccess: isCategorySuccess } = useGetCategoryListQuery('');

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const [newShelf, setNewShelf] = useState({ customDiv: [] });
  const [newShelfDetails, setNewShelfDetails] = useState([]);
  let shelfCount = 0;

  const addNewShelf = () => {
    let currentShelfs = newShelf.customDiv;
    let currentShelfDetails = newShelfDetails;

    shelfCount++;
    currentShelfs.push(`shelf${shelfCount}`);
    currentShelfDetails.push({ shelfCode: '', bookCount: 0 });

    setNewShelf({ customDiv: currentShelfs });
    setNewShelfDetails(currentShelfDetails);
  };

  const DeleteShelf = () => {
    let currentShelfs = newShelf.customDiv;
    let currentShelfDetails = newShelfDetails;

    shelfCount--;
    currentShelfs.pop();
    currentShelfDetails.pop();

    setNewShelf({ customDiv: currentShelfs });
    setNewShelfDetails(currentShelfDetails);
  };

  const handleShelfCodeChange = (e, i) => {
    let currentShelfDetails = [...newShelfDetails];

    currentShelfDetails[i].shelfCode = e.target.value;

    setNewShelfDetails(currentShelfDetails);
  };

  const handleBookCountChange = (e, i) => {
    let currentShelfDetails = [...newShelfDetails];

    currentShelfDetails[i].bookCount = Number(e.target.value);

    setNewShelfDetails(currentShelfDetails);
  };

  const [createBook] = useCreateBookMutation();

  const handleCreateBook = () => {
    createBook(bookToSend);
    navigate('/library/books');
  };

  const [editBook] = useEditBookMutation();

  const handleEditBook = () => {
    editBook({ id: id, body: bookToSend });
    navigate('/library/books');
  };

  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = (id) => {
    deleteBook(id);
    navigate('/library/books');
  };
  let [shelves, setShelves] = useState([]);
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      const results = response?.data.map((item) => ({ id: item.shelfCode, name: item.shelfCode }));

      setShelves(results);
    }
  }, [response, isSuccess]);

  useEffect(() => {
    if (isCategorySuccess) {
      const results = categoryResponse?.data.map((item) => ({ id: item, name: item }));

      setCategories(results);
    }
  }, [categoryResponse, isCategorySuccess]);

  const { data: responseBook, isSuccess: isGetBookSuccess } = useGetBookQuery(id);

  useEffect(() => {
    if (id)
      if (isGetBookSuccess) {
        setBook(responseBook?.data);
        const results = responseBook?.data?.shelves.map((item) => ({
          shelfCode: item.shelfCode,
          bookCount: item.availableBookCount
        }));

        results.map(() => {
          let currentShelfs = newShelf.customDiv;

          shelfCount++;
          currentShelfs.push(`shelf${shelfCount}`);

          setNewShelf({ customDiv: currentShelfs });
        });
        setNewShelfDetails(results);
      }
  }, [responseBook, isGetBookSuccess]);

  const bookToSend: Book = {
    isbn: book.isbn,
    title: book.title,
    author: book.author,
    category: book.category,
    description: book.description,
    publisher: book.publisher,
    releaseDate: book.releaseDate,
    thumbnailUrl: book.thumbnailUrl,
    shelves: newShelfDetails
  };

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
        <SubHeader title='Add Book' />
      )}
      <div className='create-book-form'>
        {id ? (
          <div className='form-input'>
            <Input
              type='text'
              value={book.isbn}
              // onChange={(e: any) => {
              //   setBook((prevBook) => ({ ...prevBook, isbn: e.target.value }));
              // }}
              label='Book ISBN *'
              placeholder='Book ISBN'
            />
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
          <Select
            value={book.category}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, category: e.target.value }));
            }}
            label='Category'
            options={categories}
          />
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
            <div className='add-shelf-button' onClick={addNewShelf}>
              Add Shelf
            </div>
            <div className='delete-shelf-button' onClick={DeleteShelf}>
              Delete Shelf
            </div>
          </div>
          {newShelfDetails.length > 1 &&
            newShelf.customDiv.map((shelf, i) => {
              return (
                <>
                  <div className='shelf-input-div'>
                    <div className='half-size'>
                      <Select
                        value={newShelfDetails[i].shelfCode}
                        onChange={(e) => handleShelfCodeChange(e, i)}
                        key={`${shelf}code`}
                        label='Shelf Code'
                        options={shelves}
                      />
                    </div>
                    <div className='half-size'>
                      <ShelfInput
                        value={newShelfDetails[i].bookCount}
                        onChange={(e) => handleBookCountChange(e, i)}
                        key={`${shelf}count`}
                        type='text'
                        placeholder='Book Count'
                      />
                    </div>
                  </div>
                </>
              );
            })}
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
    </HomeLayout>
  );
};

export default CreateUpdateBook;
