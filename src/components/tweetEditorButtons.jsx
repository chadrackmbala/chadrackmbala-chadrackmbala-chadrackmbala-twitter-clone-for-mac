import TweetEditorActions from "./tweetEditorActions"
import TweetEditorFormButton from "./tweetEditorFormButton"

export default function TweetEditorButtons({ tweetText, onButtonClick }) {
    return (
        <>
            <div className="tweet-editor-buttons">
                <TweetEditorActions />
                <TweetEditorFormButton tweetText={tweetText} onButtonClick={onButtonClick} style={"tweet-editor-button"} />
            </div>
        </>
    );
};