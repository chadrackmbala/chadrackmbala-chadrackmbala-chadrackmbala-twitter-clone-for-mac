import React, { useContext } from 'react';
import Tweet from './tweet';
import UserService from '../utils/tweetsData';
import InitialData from '../data/initial-data.json';
import TweetsContext from '../context/TweetsContext';
import NweTweetContext from '../context/NweTweetContext';

export default function Tweets() {

    const nweTweetContext = useContext(NweTweetContext);

    const { tweets } = useContext(TweetsContext);

    return (
        <>
            <div>
                {tweets.map((tweet, index) => {
                    return <Tweet tweet={tweet} key={index} />
                })}
            </div>
        </>
    );
};























// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import UserContext from "./context/UserContext";
// import Layout from './components/layout';
// import Home from "./pages/home";
// import Explore from './components/explore';
// import Notifications from './components/notifications';
// import Messages from './components/messages';
// import Bookmarks from './components/bookmarks';
// import Lists from './components/liste';
// import Profile from './components/profile';
// import More from './components/more';
// import UserProfile from './pages/user-profile';

// export default function App() {
//     const [pseudo, setPsuedo] = useState(null);
  
//     const handleLoginSubmit = (userName) => {
//       setPsuedo(userName);
//     }
// }

// <UserContext.Provider value={{ isLogged: true, pseudo: pseudo }}>
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Login onLoginSubmit={handleLoginSubmit} />} />
//             <Route path='/' element={<Layout />} >
//                 <Route path="/" element={<Home />} />
//                 <Route path="/explore" element={<Explore />} />
//                 <Route path="/notifications" element={<Notifications />} />
//                 <Route path="/messages" element={<Messages />} />
//                 <Route path="/bookmarks" element={<Bookmarks />} />
//                 <Route path="/lists" element={<Lists />} />
//                 <Route path="profile" element={<Profile />} />
//                 <Route path="more" element={<More />} />
//                 <Route path=":tweetTitle" element={<UserProfile />} />
//             </Route>
//             <Route path="/" element={<AdminLayout />} >
//                 <Route path="/all-products" element={<AllProducts />} />
//                 <Route path="/create-product" element={<CreateProduct />} />
//                 <Route path="update-product" element={<UpdateProduct />} />
//                 <Route path="delete-product" element={<DeleteProduct />} />
//                 <Route path=":id" element={<SignleProduct />} />
//             </Route> 
//         </Routes>
//     </BrowserRouter>
// </UserContext.Provider>