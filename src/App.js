import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Home from './Pages/Home';
import Login from './Pages/Login';
import CreatePost from './Pages/CreatePost';
import NavBar from './Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div className="App">
      <NavBar isAuth={isAuth} signOut={signUserOut} />

      <Routes>
        <Route exact path="/" element={<Home isAuth={isAuth} />}></Route>
        <Route
          exact
          path="/create-post"
          element={<CreatePost isAuth={isAuth} />}
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setIsAuth={setIsAuth} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
