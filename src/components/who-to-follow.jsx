import Followers from './followers';

export default function WhoToFollow() {
    return (
        <div className='trends-for-you'>
          <h3>Who to follow</h3>
            <div className='follow-content' >
                <Followers />
            </div>
          <div className='show-more'>
            <p>Show more</p>
          </div>
        </div>
    );
};