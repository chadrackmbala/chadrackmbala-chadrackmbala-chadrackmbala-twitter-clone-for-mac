// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

// import('./style/reset.css');
// import('./style/App.css');

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/explore",
//         element: <Explore />,
//       },
//       {
//         path: "/notifications",
//         element: <Notifications />,
//       },
//       {
//         path: "/messages",
//         element: <Messages />,
//       },
//       {
//         path: "/bookmarks",
//         element: <Bookmarks />,
//       },
//       {
//         path: "/lists",
//         element: <Lists />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//       {
//         path: "/more",
//         element: <More />,
//       },
//       {
//         path: ":tweetTitle",
//         element: <UserProfile />,
//       },
//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );



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

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import('./style/reset.css');
import('./style/App.css');



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);