import React, { useContext } from 'react';
import {Route, Routes} from "react-router-dom";
import NewPost from './pages/NewPost/NewPost';
import EditPost from './pages/EditPost/EditPost';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import EditUserProfile from './pages/EditUserProfile/EditUserProfile';
import Notifications from './pages/Notifications/Notifications';
import MainNavigation from './components/MainNavigation/MainNavigation.js';
import Tags from './components/Tags/Tags';
import Tag from './pages/Tag/Tag';
import Post from './pages/Post/Post';
import SearchResults from './pages/SearchResults/SearchResults';
import ReadingList from './pages/ReadingList/ReadingList';
import Footer from './components/Footer/Footer';
import { AuthContext } from './context/auth';
import Fobbidden from './pages/403';
import ListQA from './pages/QA/ListQA';
import AdminLayOut from './pages/QA/AdminLayOut';
import Layout from './pages/Layout';
import ProtectedRoute from './pages/QA/AdminLayOut';
import DashBoard from './pages/QA/DashBoard';
import ListStaff from './pages/QA/ListStaff';

const MainRouter = ({ token }) => {
  const data = useContext(AuthContext);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
          <Route path='/users/:userId' element={<UserProfile />} />
          <Route path='/users/:userId/edit' element={<EditUserProfile />} />
          <Route path='/users/:userId/readinglist' element={<ReadingList />} />
          <Route path='/users/:userId/notifications' element={<Notifications />} />
          <Route path='/auth' element={<Auth newUser={false} />} />
	        <Route path='/auth/new-user' element={<Auth newUser={true} />} />
          <Route path='/tags' element={<Tags />} />
          <Route path='/tags/:tagName' element={<Tag />} />
          <Route path='/search/' element={<SearchResults />} />
          <Route path='/posts/new' element={<NewPost />} />
          <Route path='/posts/:titleURL/:postId' element={<Post />} />
          <Route path='/posts/:titleURL/:postId/edit' element={<EditPost />} />
          <Route path='/*' element={<Fobbidden />} />          
      </Route>
      <Route element={<ProtectedRoute user={data}/>}>
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/list-qa' element={<ListQA />} />
      <Route path='/list-staff' element={<ListStaff />} />
      </Route>
    </Routes>
  )
};

export default MainRouter;
