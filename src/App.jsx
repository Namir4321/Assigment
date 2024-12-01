import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import SignInPage from './components/SignIn/SignInPage'
import SignUpPage from './components/SignUp/SignUpPage'
import Userlists from './components/Userlist/Userlists'
import { useSelector } from 'react-redux';
import HomePage from './Pages/HomePage';
function App() {
const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={user ? <HomePage /> : <SignInPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <SignInPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <SignUpPage />}
        />
      </Routes>
    </div>
  );
}

export default App
