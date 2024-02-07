import { useContext, useState } from "react"
import NweTweetContext from "../context/NweTweetContext"
import TestContext from "../context/TestContext";

export default function TweetButton({ onButtonClick, style }) {

    return (
        <>
            <button onClick={onButtonClick} className={style} >Tweet</button>
        </>
    );
};