import { useParams } from "react-router-dom"
import UserService from "../utils/tweetsData";
import Header from "../components/header";
import Avatar from "../components/avatar";
import React, { useContext } from 'react';
import TweetsContext from '../context/TweetsContext';

export default function UserProfile() {
    const data = useContext(UserService.getUsers());
    const { tweets, tweetSeter } = useContext(TweetsContext);
    console.log(data);
    const useParam = useParams();
    const { tweetTitle } = useParam;
    const user = tweets.find((user) => user.tweetTitle === tweetTitle);
    return (
        <>
            <div className="timeline">
                <Header />
                <Avatar AvatarImage={user.tweetAvatar} />
            </div>
        </>
    );
};