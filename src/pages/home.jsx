import React from 'react';
import Header from '../components/header';
import TweetEditor from '../components/tweetEditor';
import Tweets from '../components/tweets';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>
  );
}

export default Home;