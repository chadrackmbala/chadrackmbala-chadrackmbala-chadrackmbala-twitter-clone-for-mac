import { Comments, Retweet, Heart, Share } from '../icons/index';
import React, { useContext, useState } from 'react';
import InitialData from "../data/initial-data.json";
import TweetsContext from '../context/TweetsContext';

export default function TweetActions({details}) {

    const initialActionData = InitialData.tweets;

    const { tweets } = useContext(TweetsContext);
    console.log(tweets.comments);

    return (
        <>
            <div className="tweet-actions">
                <div className="tweet-action" >
                    <img src={Comments} alt="" />
                    <p>{initialActionData.comments}</p>
                    <p>{tweets.comments}</p>
                </div>
                <div className="tweet-action" >
                    <img src={Retweet} alt="" />
                    <p>{initialActionData.comments}</p>
                </div>
                <div className="tweet-action" >
                    <img src={Heart} alt="" />
                    <p>{initialActionData.comments}</p>
                </div>
                <div className="tweet-action" >
                    <img src={Share} alt="" />
                </div>
            </div>
        </>
    );
};



{
    // import { Comments, FLeche, Heart, Share } from '../icons/index';
// import Heart2 from '../images/heart2.png'
// import React, { useContext, useState } from 'react';
// import UserService from '../utils/tweetsData';

// export default function TweetActions({id, details}) {

//     const [action, setAction] = useState({
//         comments: details.comments,
//         likes: details.likes,
//         fleches: details.fleches
//     });
//     const [tweetLike, setTweetLike] = useState([]);
//     // let count = 0;

//     const toggleLike = () => {
//         const like = action.likes;
//         if (tweetLike.includes(id)) {
//             setTweetLike(tweetLike.filter((item) => item !== id));
//             if (typeof like === 'number') {
//                 const count = Number(like) -1
//                 setAction({
//                     ...action,
//                     likes: count
//                 });
//             } else if(typeof like === 'string') {
//                 const likeString = like.toString()
//                 if (likeString.includes('M')) {
//                     const newLk = likeString.replace('M', '');
//                     const newArray = newLk.split('.');
//                     const CountLk = Number(newArray[1]) - 1;
//                     const count = newArray[0] + '.' + CountLk + 'M';
//                     setAction({
//                         ...action,
//                         likes: count
//                     });
//                 }
//                 if (likeString.includes('K')) {
//                     const newLk = likeString.replace('K', '');
//                     const newArray = newLk.split('.');
//                     const CountLk = Number(newArray[1]) -1;
//                     const count = newArray[0] + '.' + CountLk - 1+ 'K';
//                     setAction({
//                         ...action,
//                         likes: count
//                     });
//                 }
                
//             } else {
//                 setAction({
//                     ...action,
//                     likes: action.likes - 1
//                 });
//             }
//         } else {
//             setTweetLike([...tweetLike, id]);
//             if (typeof like === 'number') {
//                 const count = Number(like) + 1
//                 setAction({
//                     ...action,
//                     likes: count
//                 });
//             } else if(typeof like === 'string') {
//                 const likeString = like.toString()
//                 if (likeString.includes('M')) {
//                     const newLk = likeString.replace('M', '');
//                     const newArray = newLk.split('.');
//                     const CountLk = Number(newArray[1]) +1;
//                     const count = newArray[0] + '.' + CountLk + 'M';
//                     setAction({
//                         ...action,
//                         likes: count
//                     });
//                 }
//                 if (likeString.includes('K')) {
//                     const newLk = likeString.replace('K', '');
//                     const newArray = newLk.split('.');
//                     const CountLk = Number(newArray[1]) + 1;
//                     const count = newArray[0] + '.' + CountLk+ 'k';
//                     setAction({
//                         ...action,
//                         likes: count
//                     });
//                 }
//             }else {
//                 setAction({
//                     ...action,
//                     likes: 1
//                 });
//             }
//         }
//     }

//     return (
//         <>
//             <div className="tweet-actions">
//                 <div className="tweet-action">
//                     <img src={Comments} alt="" />
//                     <p>{action.comments}</p>
//                 </div>
//                 <div className="tweet-action">
//                     <img src={FLeche} alt="" />
//                     <p>{action.fleches}</p>
//                 </div>
//                 <div className="tweet-action" >
//                     <img src={!tweetLike.includes(id) ? Heart : Heart2 } alt="" className="tweet-icon" onClick={toggleLike} />
//                     <p>{action.likes}</p>
//                 </div>
//                 <div className="tweet-action" onClick={toggleLike}>
//                     <img src={Share} alt="" />
//                 </div>
//             </div>

            

//         </>
//     );
// };
}