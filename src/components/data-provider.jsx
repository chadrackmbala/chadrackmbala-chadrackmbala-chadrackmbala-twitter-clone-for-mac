import { useState } from "react";
import TweetsContext from '../context/TweetsContext'
import InitialData from "../data/initial-data.json";

export default function DataProvider({ children }) {

    const tweetsTata = InitialData.tweets;

    const [tweetData, setTweetData] = useState(tweetsTata);

    function tweetSeter(newTweet) {
        setTweetData(newTweet);
    }

    return (
        <TweetsContext.Provider value={{ tweets: tweetData, tweetSeter }} >
            {children}
        </TweetsContext.Provider>
    )
}