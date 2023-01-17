import LandingPage from "./pages/LandingPage";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Landing Page</Link>
      </nav>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/register' element={<div>Register</div>}/>
        <Route path='/dashboard' element={<div>Dashboard</div>}/>
        <Route path='/*' element={<h1>Error</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
