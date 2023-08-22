import { useState } from 'react';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import Input from '../../components/input/Input';
import './styles.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import ShelfInput from '../../components/input-shelves/input-shelves';
import Select from '../../components/select/Select';

const CreateUpdateBook = () => {
  const [book, setBook] = useState({
    ISBN: '',
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

  const statusOptions = [
    { id: 'active', name: 'Active' },
    { id: 'inactive', name: 'Inactive' },
    { id: 'probation', name: 'Probation' }
  ];

  const navigate = useNavigate();
  const { isbn } = useParams();

  const [newShelf, setNewShelf] = useState({ customDiv: ['shelf1'] });
  const [newShelfDetails, setNewShelfDetails] = useState([{ shelfCode: ' ', bookCount: 0 }]);
  let shelfCount = 1;

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

    currentShelfDetails[i].bookCount = e.target.value;

    setNewShelfDetails(currentShelfDetails);
  };

  return (
    <HomeLayout>
      {isbn ? <SubHeader title='Edit Book' /> : <SubHeader title='Add Book' />}
      <div className='create-book-form'>
        {isbn ? (
          <div className='form-input'>
            <Input
              type='text'
              value={isbn}
              // onChange={(e: any) => {
              //   setBook((prevBook) => ({ ...prevBook, ISBN: e.target.value }));
              // }}
              label='Book ISBN'
              placeholder='Book ISBN'
            />
          </div>
        ) : (
          <div className='form-input'>
            <Input
              type='text'
              value={book.ISBN}
              onChange={(e: any) => {
                setBook((prevBook) => ({ ...prevBook, ISBN: e.target.value }));
              }}
              label='Book ISBN'
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
            label='Title'
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
            label='Author'
            placeholder='Author'
          />
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.category}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, category: e.target.value }));
            }}
            label='Category'
            placeholder='Category'
          />
        </div>
        <div className='form-input'>
          <Input
            type='text'
            value={book.description}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, description: e.target.value }));
            }}
            label='Description'
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
          {newShelf.customDiv.map((shelf, i) => {
            console.log(newShelfDetails[0]);

            return (
              <>
                <div className='shelf-input-div'>
                  <div className='half-size'>
                    <Select
                      value={newShelfDetails[i].shelfCode}
                      onChange={(e) => handleShelfCodeChange(e, i)}
                      key={`${shelf}code`}
                      label='Shelf Code'
                      options={statusOptions}
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
          {isbn ? <Button style='primary' text='Save' /> : <Button style='primary' text='Create' />}
          <Button
            style='secondary'
            onClick={() => {
              navigate(-1);
            }}
            text='Cancel'
          />
        </div>
      </div>
    </HomeLayout>
  );
};

export default CreateUpdateBook;
