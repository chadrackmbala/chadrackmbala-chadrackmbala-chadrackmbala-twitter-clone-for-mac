import { createContext } from "react";
import { newyorkTime, cnnAvatar, tweetLogo, userAvatar } from "../images/index2"


const TweetAvatarContext = createContext([
   {
       id: 1,
       userAvatar: userAvatar
   },
   {
       id: 2,
       cnnAvatar: cnnAvatar
   },
   {
       id: 3,
       tweetLogo: tweetLogo
   },
   {
       id: 4,
       newyorkTime: newyorkTime
   }
]);

export default TweetAvatarContext;