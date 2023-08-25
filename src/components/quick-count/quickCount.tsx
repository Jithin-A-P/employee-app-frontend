import { FC } from 'react';
import './styles.css';

export type QuickCountPropTypes = {
  text: string;
  count: number;
};

const QuickCount: FC<QuickCountPropTypes> = ({ text, count }) => {
  return (
    <div className='qc-main'>
      <div className='qc-text'>{text}</div>
      <div>
        <div className='qc-count'>{count}</div>
      </div>
    </div>
  );
};

export default QuickCount;
