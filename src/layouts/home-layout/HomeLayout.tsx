import { ToastContainer, toast } from 'react-toastify';
import Header from '../../components/header/Header';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../components/sidebar/Sidebar';
import './styles.css';

const HomeLayout = ({ children }) => {
  return (
    <div className='home'>
      <Header />
      <div className='home-content'>
        <Sidebar />
        <div className='home-main-content'>{children}</div>
      </div>
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={1500}
        hideProgressBar={true}
      />
    </div>
  );
};

export default HomeLayout;
