import TweetEditorInput from './tweetEditorInput';
import TweetEditorButtons from './tweetEditorButtons';
import { useState, useContext, useRef } from 'react';
import NweTweetContext from '../context/NweTweetContext';
import TweetsContext from '../context/TweetsContext';
import TweetButton from './tweetButton';
import TweetEditorActions from "./tweetEditorActions";
import TweetEditorFormButton from "./tweetEditorFormButton";
import createData from '../utils/createData';
import UserContext from '../context/UserContext';
import { newyorkTime, tweetProfilePhoto, tweetLogo, cnnAvatar, userProfil } from '../images/index';



export default function TweetEditorForm() {

    let currentUser = useContext(UserContext);
    const { tweets, tweetSeter } = useContext(TweetsContext);
    const [inputText, setInputText] = useState("");

    function handleTweetInputChange(text) {
        setInputText(text);
    }

    const tweetInput = useRef(null);

    const [newTweetData, setNewTweetData] = useState("");

    const userId = tweets.length + 1;

    function handleButtonClick(e) {
        e.preventDefault();

        let newTweet

        if (inputText.replace(/\s+/, "").length) {
            newTweet = {
                id: userId,
                tweetAvatar: userProfil,
                tweetTitle: currentUser.name,
                tweetGroup: null,
                tweetP: "@CNN . 7m",
                tweetText: inputText,
                tweetImage: null,
                tweetComment: tweets.tweetComment,
                tweetFlech: tweets.tweetFlech,
                tweetHeart: tweets.tweetHeart,
                tweetShare: tweets.tweetShare,
                details: {
                    comments: 0,
                    fleche: 0,
                    likes: 0
                }
            }
        }
        // console.log("New Tweet :", newTweet);
        setNewTweetData(newTweet)
        tweetSeter([newTweet, ...tweets]);
        tweetInput.current.value = "";

        console.log("New Tweet :", newTweetData);
    }

    return (
        <>
            <div className="tweet-editor-form">
                <form>
                    <TweetEditorInput resetInput={tweetInput} onInputChange={handleTweetInputChange} />
                    <div className="tweet-editor-buttons">
                        <TweetEditorActions />
                        <TweetButton onButtonClick={handleButtonClick} style={"tweet-editor-button"} />
                    </div>
                </form>
            </div>
        </>
    );
};