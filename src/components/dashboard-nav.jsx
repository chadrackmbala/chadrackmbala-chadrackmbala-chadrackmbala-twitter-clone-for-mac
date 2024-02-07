import { NavLink } from "react-router-dom";
import { Bookmarks, Explore, Lists, Messages, More, Profile, TwiterIcon, Notifications, Home, Padlock, More2 } from "../icons/index"
import TweetEditorFormButton from './tweetEditorFormButton';
import Avatar from "./avatar";
import AvatarService from "../utils/avatar";
import { useContext } from "react";

export default function DashboardNav() {

    const TweetAvatarContext = useContext(AvatarService.getAvatars());

    return (
        <div className="left-sidebar">
            <ul className='sidebar'>
                <li className="sidebar-nav">
                    <img src={TwiterIcon} alt="" />
                </li>
                <li className="sidebar-nav">
                    <img src={Home} alt="" />
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Explore} alt="" />
                    <NavLink className="nav-link" to="/explore">Explore</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Notifications} alt="" />
                    <NavLink className="nav-link" to="/notifications">Notifications</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Messages} alt="" />
                    <NavLink className="nav-link" to="/messages">Messages</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Bookmarks} alt="" />
                    <NavLink className="nav-link" to="/bookmarks">Bookmarks</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Lists} alt="" />
                    <NavLink className="nav-link" to="/lists">Lists</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={Profile} alt="" />
                    <NavLink className="nav-link" to="/profile">Profile</NavLink>
                </li>
                <li className="sidebar-nav">
                    <img src={More} alt="" />
                    <NavLink className="nav-link" to="/more">More</NavLink>
                </li>
                <TweetEditorFormButton style={"left-sidebar-button"} />
            </ul>
            <div>
                <div className="">
                    <div className="follower-origin">
                        <Avatar AvatarImage={TweetAvatarContext[0].userAvatar} style={"left-sidebar-avatar"} />
                        <div>
                            <div className="left-sidebar-avatar-text">
                                <div>
                                    <h4>Bradley Ortiz</h4>
                                    <p className="gray-text left-sidebar-avatar-name">@bradle_</p>
                                </div>
                                <img src={Padlock} alt="" />
                                <img src={More2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};