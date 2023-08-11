
import './App.css';
import Home from './components/Home/Home';
import SignUp from './components/Sign/SignUp';
import SignIn from './components/Sign/SignIn';
import Mainpage from './components/Main/Mainpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Main" element={<Mainpage />} />
      </Routes>
    </Router >
  );
}

export default App;
