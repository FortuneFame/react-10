import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Users } from './pages/Users';
import { SingleUser } from './pages/SingleUser';
import { Posts } from './pages/Posts';
import { SinglePost } from './pages/SinglePost';
import { Comments } from './pages/Comments';
import { SingleComment } from './pages/SingleComment';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/comments/:id" element={<SingleComment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
