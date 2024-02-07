import React from "react"

export default function Trend({ trend }) {
    const trendIcon = trend.icon;
    return (
        <>
            <div className="trend">
                <div className="trend-origin">
                    <p className="gray-text"> {trend.origin} </p>
                    <img src={trendIcon} alt="" className="img-ponts" />
                </div>
                <h3> {trend.content} </h3>
                <p className="gray-text"> {trend.tweets} </p>
            </div>
        </>
    )
}