import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import ShelfCard from '../../components/shelf-card/ShelfCard';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './style.css';

const ShelfGrid = () => {
  return (
    <HomeLayout>
      <SubHeader title='Shelfs'>
        <MaterialIconButton icon='assets/icons/plus.svg' text='Create Shelf' onClick={() => {}} />
      </SubHeader>
      <div className='grid'>
        <ShelfCard location={'Office 1'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
        <ShelfCard location={'Office 2'} />
      </div>
    </HomeLayout>
  );
};

export default ShelfGrid;
