// import Layout from "./components/layout.jsx";
// import TweetAvatarContext from "./context/TweetAvatarContext.js";
// import TweetsData from "./utils/tweetsData.js"

// import('./style/reset.css');
// import('./style/App.css');

// export default function App() {
//   return (
//     <>
//       <TweetsData.Provider>
//         <TweetAvatarContext.Provider>
//           <Layout />
//         </TweetAvatarContext.Provider>
//       </TweetsData.Provider>
//     </>
//   );
// };

// import { useState } from 'react';
// import Login from './components/login.jsx';
// import UserContext from "./context/UserContext.js";
// import Layout from './components/layout.jsx';

// export default function App() {
//     const [pseudo, setPseudo] = useState(null);

//     const handleLoginSubmit = (userName) => {
//         setPseudo(userName);
//     };

//     return (
//         pseudo ?
//             <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
//                 <Layout />
//             </UserContext.Provider>
//             :
//             <Login onLoginSubmit={handleLoginSubmit} />
//     );
// };


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from "./pages/home";
import Explore from './components/explore';
import Notifications from './components/notifications';
import Messages from './components/messages';
import Bookmarks from './components/bookmarks';
import Lists from './components/liste';
import Profile from './components/profile';
import More from './components/more';
import UserProfile from './pages/user-profile';
import DataProvider from './components/data-provider';
import InitialData from "./data/initial-data.json";
import UserContext from './context/UserContext';

export default function App() {

  const usersData = InitialData.currentUser;

  console.log("IMAGE :",usersData.userImageProfil);
  console.log("TYPE :", typeof usersData.userImageProfil);

  let currentUser = usersData;

  console.log(currentUser.userImageProfil);

  const [userData, setUserdata] = useState(currentUser);

  return (
    <UserContext.Provider value={{
      isLogged: true,
      name: userData.name,
      userImageProfil: userData.userImageProfil
    }}>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/more" element={<More />} />
              <Route path=":tweetTitle" element={<UserProfile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </UserContext.Provider>
  )
}