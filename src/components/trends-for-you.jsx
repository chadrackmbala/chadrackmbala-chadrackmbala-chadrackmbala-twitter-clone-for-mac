import { Settings } from '../icons/index';
import Trends from './trends';

export default function TrendsForYou() {
  return (
    <div className='trends-for-you'>
      <div className="trends-for-you-title">
        <h3>Trends for you</h3>
        <img src={Settings} alt="" className='settings' />
      </div>
      <div >
        <Trends />
      </div>
      <div className='show-more'>
        <p>Show more</p>
      </div>
    </div>
  );
};