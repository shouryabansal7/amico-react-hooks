import React from 'react';
import { Loader, Navbar } from './';
import { Home, Login } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks';

const Page404 = () => {
  return <h1>404</h1>;
};

function App() {
  const auth = useAuth();

  if (auth.loading) {
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
                <Home />
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
