import MediaIcon from "../icons/Media.png"
import Gif from "../icons/Gif.png"
import Poll from "../icons/Poll.png"
import Emoji from "../icons/Emoji.png"
import Schedule from "../icons/Schedule.png"

export default function TweetEditorActions() {
    return (
        <>
            <div className="tweet-editor-actions">
                <img src={MediaIcon} alt="media-icon" />
                <img src={Gif} alt="gif-icon" />
                <img src={Poll} alt="poll-icon" />
                <img src={Emoji} alt="emoji-icon" />
                <img src={Schedule} alt="schedule-icon" />
            </div>
        </>
    );
};