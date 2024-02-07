import React from 'react';
import Follower from './follower';
import followersData from "../utils/followers"

export default function Followers() {
    return (
        <>
            <div>
                {followersData.map((followersObject, index) => {
                    return <Follower follower={followersObject} key={index} />
                })}
            </div>
        </>
    )
}