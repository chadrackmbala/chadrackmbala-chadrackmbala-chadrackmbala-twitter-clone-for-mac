import { createContext } from 'react';
import {Group, Comments, Retweet, Heart, Share } from '../icons/index';
import {newyorkTime, tweetImage, tweetProfilePhoto, tweetLogo} from '../images/index';

class UserService {
    static getUsers () {
        const TweetsData = createContext([
            {
                id: 1,
                tweetAvatar: tweetProfilePhoto,
                tweetTitle : "CNN",
                tweetGroup : Group,
                tweetP : "@CNN . 7m",
                tweetText : "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
                tweetImage : null,
                tweetComment : Comments,
                tweetFlech : Retweet,
                tweetHeart : Heart,
                tweetShare : Share,
                details: {
                    comments: 57,
                    fleche: 144,
                    likes: 184,
                }
            },
            {
                id: 2,
                tweetAvatar: newyorkTime,
                tweetTitle : "The New York Times",
                tweetGroup : Group,
                tweetP : "@nytimes . 2h",
                tweetText : "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
                tweetImage : tweetImage,
                tweetComment : Comments,
                tweetFlech : Retweet,
                tweetHeart : Heart,
                tweetShare : Share,
                details: {
                    comments: 19,
                    fleche: 48,
                    likes: 482,
                }
            },
            {
                id: 3,
                tweetAvatar: tweetLogo,
                tweetTitle : "Twitter",
                tweetGroup : Group,
                tweetP : "@Twitter . Oct 29",
                tweetText : "BIG NEWS lol jk still Twitter",
                // tweetImage : tweetImage,
                tweetComment : Comments,
                tweetFlech : Retweet,
                tweetHeart : Heart,
                tweetShare : Share,
                details: {
                    comments: "6.8K",
                    fleche: "36.6K",
                    likes: "267.1K",
                }
            },
            {
                id: 4,
                tweetAvatar: tweetLogo,
                tweetTitle : "Twitter",
                tweetGroup : Group,
                tweetP : "@Twitter . Oct 4",
                tweetText : "hello literally everyone",
                // tweetImage : tweetImage,
                tweetComment : Comments,
                tweetFlech : Retweet,
                tweetHeart : Heart,
                tweetShare : Share,
                details: {
                    comments: "118.7K",
                    fleche: "785.4K",
                    likes: "3.3M",
                }
            },
            {
                id: 4,
                tweetAvatar: tweetLogo,
                tweetTitle : "Twitter",
                tweetGroup : Group,
                tweetP : "@Twitter . Oct 4",
                tweetText : "hello literally everyone",
                // tweetImage : tweetImage,
                tweetComment : Comments,
                tweetFlech : Retweet,
                tweetHeart : Heart,
                tweetShare : Share,
                details: {
                    // comments: 19,
                    // fleche: 48,
                    // likes: 482,
                }
            },
        ]);
        return TweetsData;
    };
};

export default UserService;