import QuickCount from '../../components/quick-count/quickCount';
import SubHeader from '../../components/sub-header/SubHeader';
import TableHead from '../../components/table-head/TableHead';
// import TableHistoryRow from '../../components/table-history-row/tableHistoryRow';
import HomeLayout from '../../layouts/home-layout/HomeLayout';
// import { HistoryBooks } from '../../utils/tmp-borrowed-books';
import './styles.css';

const AdminHistory = () => {
  const tableHeadVlaues = ['Employee Name ', 'Book Taken', 'ISBN', 'Taken on', 'Returned At'];

  // const values = HistoryBooks;

  return (
    <HomeLayout>
      <SubHeader title='Admin-Dashboard' />
      <div className='admin-quikview-main'>
        <div className='quick-count-main-div'>
          <QuickCount count={8} text='Total Book Count' />
          <QuickCount count={12345} text='To Return-Books' />
          <QuickCount count={332} text='Total Members' />
        </div>
        <div className='admin-circulation-history'>Circulation History</div>
        <div className='admin-history-table'>
          <table className='table'>
            <TableHead tableHeadValues={tableHeadVlaues} />
            {/* <TableHistoryRow bookHistory={values} /> */}
          </table>
        </div>
      </div>
    </HomeLayout>
  );
};

export default AdminHistory;
