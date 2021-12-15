import React, { useEffect, useState } from 'react';
import { Loader, Navbar } from './';
import { getPosts } from '../api';
import { Home, Login } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log('response', response);
      if (response.success) {
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Home posts={posts} />
              </React.Fragment>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
