import React from 'react';
import Trend from './trend';
import trendsData from '../utils/trendsData';

export default function Trends() {
    return (
        <>
            <div>
                {trendsData.map((trendsObject, index) => {
                    return <Trend trend={trendsObject} key={index} />
                })}
            </div>
        </>
    )
}