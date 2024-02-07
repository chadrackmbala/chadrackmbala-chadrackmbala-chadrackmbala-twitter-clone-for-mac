import React, { useContext } from 'react';
import UserService from '../utils/tweetsData';
import TweetActions from './tweetActions';

export default function TweetsActions() {
    const tweetsData = useContext(UserService.getUsers());
    return (
        <>
            <div>
                {tweetsData.map((tweetActions, index) => {
                    return <TweetActions tweetActions={tweetActions} key={index} />
                })}
            </div>
        </>
    );
};