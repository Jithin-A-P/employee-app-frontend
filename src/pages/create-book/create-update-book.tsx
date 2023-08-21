import { useState } from 'react';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import SubHeader from '../../components/sub-header/SubHeader';
import Input from '../../components/input/Input';
import './styles.css';
import Button from '../../components/button/Button';
import { useNavigate, useParams } from 'react-router-dom';

const CreateUpdateBook = () => {
  const [book, setBook] = useState({
    ISBN: '',
    title: '',
    author: '',
    category: '',
    totalCount: '',
    availableCount: '',
    shelfCode: []
  });

  const navigate = useNavigate();
  const { isbn } = useParams();

  return (
    <HomeLayout>
      {isbn ? <SubHeader title='Edit Book' /> : <SubHeader title='Create Book' />}
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
            type='number'
            value={book.totalCount}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, totalCount: e.target.value }));
            }}
            label='Total Count'
            placeholder='Total Count'
          />
        </div>
        <div className='form-input'>
          <Input
            type='number'
            value={book.availableCount}
            onChange={(e: any) => {
              setBook((prevBook) => ({ ...prevBook, availableCount: e.target.value }));
            }}
            label='Available Count'
            placeholder='Available Count'
          />
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
