import { useState } from 'react';
import BookQuckViewPopup from '../../components/book-quick-view-popup/BookQuickViewPopup';
import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import ShelfCard from '../../components/shelf-card/ShelfCard';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './style.css';
import { useNavigate } from 'react-router-dom';

const ShelfGrid = () => {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const handleDelete = () => {};
  const navigate = useNavigate();

  return (
    <HomeLayout>
      <SubHeader title='Shelves'>
        <MaterialIconButton
          icon='assets/icons/plus.svg'
          text='Create Shelf'
          onClick={() => {
            navigate('/library/shelves/create');
          }}
        />
      </SubHeader>
      <div className='grid'>
        <ShelfCard
          location={'Office 1'}
          setDeletePopup={(isVisible) => {
            setPopupIsVisible(isVisible);
          }}
        />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
      </div>
      <BookQuckViewPopup
        isVisible={popupIsVisible}
        setIsVisible={(isVisible) => {
          setPopupIsVisible(isVisible);
        }}
        handleNotify={() => {
          handleDelete();
        }}
        isAvailable={false}
      />
    </HomeLayout>
  );
};

export default ShelfGrid;
