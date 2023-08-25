import Input from '../../components/input/Input';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import Button from '../../components/button/Button';

import { useNavigate } from 'react-router';
import Select from '../../components/select/Select';
import { useGetShelflistQuery } from '../../api-client/shelf-api';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import './styles.css';
import { useLendBookMutation } from '../../api-client/book-api';
import getCurrentUser from '../../utils/get-current-user';
import { toast } from 'react-toastify';

const LendBook = () => {
  const [shelfCode, setShelfCode] = useState('');
  const [bookIsbn, setBookIsbn] = useState('');

  const navigate = useNavigate();

  const { data: responseCategoriesList } = useGetShelflistQuery('');
  const shelfCodes = responseCategoriesList?.data.map((item) => ({
    id: item.shelfCode,
    name: item.shelfCode
  }));

  const [lendBook, { isSuccess: lendBookSuccess, isError: lendBookError }] = useLendBookMutation();

  useEffect(() => {
    if (lendBookSuccess) toast.success('Successfully lended the book!');
    if (lendBookError) toast.error("Can't borrow this book at the moment");
  }, [lendBookSuccess, lendBookError]);

  return (
    <HomeLayout>
      <div className='create-shelf-form'>
        <div className='input-rows'>
          <div className='form-input'>
            <Input
              type='text'
              value={bookIsbn}
              onChange={(e: BaseSyntheticEvent) => {
                setBookIsbn(e.target.value);
              }}
              label='Book ISBN'
              placeholder='Book ISBN'
            />
          </div>
          <div className='form-input'>
            {shelfCodes && (
              <Select
                options={shelfCodes}
                value={shelfCode}
                onChange={(e) => {
                  setShelfCode(e.target.value);
                }}
                label='Shelf'
              />
            )}
          </div>
        </div>
        <div>
          <div className='form-button'>
            <Button
              style='primary'
              onClick={() => {
                if (bookIsbn !== '')
                  lendBook({
                    isbn: bookIsbn,
                    body: {
                      employeeId: getCurrentUser().id,
                      shelfCode: shelfCode
                    }
                  });
                else toast.error('Enter book isbn!');
              }}
              text='Lend'
            />
            <Button
              style='secondary'
              onClick={() => {
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

export default LendBook;
