import QuickCount from '../../components/quick-count/quickCount';
import SubHeader from '../../components/sub-header/SubHeader';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
import './styles.css';

const AdminHistory = () => {
  return (
    <HomeLayout>
      <SubHeader title='Admin-Dashboard' />
      <div className='admin-quikview-main'>
        <div className='quick-count-main-div'>
          <QuickCount count={8} text='Total Count' />
          <QuickCount count={8} text='To Return' />
          <QuickCount count={8} text='Total Members' />
        </div>
      </div>
    </HomeLayout>
  );
};

export default AdminHistory;
