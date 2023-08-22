import MaterialIconButton from '../../components/material-icon-button/MaterialIconButton';
import ShelfCard from '../../components/shelf-card/ShelfCard';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { Shelves } from '../../constants/shelves';

const ShelfGrid = () => {
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
        {Shelves.map((item) => (
          <ShelfCard
            key={item.id}
            id={item.id}
            location={item.location}
            onClick={(id: string) => {
              navigate(`/library/shelves/edit/${id}`);
            }}
            onViewBooks={(id: string, e) => {
              console.log('view books clicked');
              navigate(`/library/shelves/${id}`);
              e.stopPropagation();
            }}
          />
        ))}
      </div>
    </HomeLayout>
  );
};

export default ShelfGrid;
