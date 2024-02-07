import Avatar from "./avatar";
import TweetEditorForm from "../components/tweetEditorForm";
import AvatarService from "../utils/avatar";
import { useContext } from "react";
import TweetAvatarContext from "../context/TweetAvatarContext";

export default function TweetEditor() {

    // let user = AvatarService.getAvatars();
    const TweetAvatarContext = useContext(AvatarService.getAvatars());

    // const avatarsData = useContext(TweetAvatarContext);

    return (
        <>
            <div className="tweet-editor">
                {/* <Avatar AvatarImage={avatarsData[0].userAvatar}/> */}
                <Avatar AvatarImage={TweetAvatarContext[0].userAvatar} />
                <TweetEditorForm />
            </div>
        </>
    );
};