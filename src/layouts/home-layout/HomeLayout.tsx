import Header from '../../components/header/Header';
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
    </div>
  );
};

export default HomeLayout;
