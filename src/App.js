import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Register, Error } from "./pages";
import {AllJobs, AddJob, Profile, Stats, SharedLayout} from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard">
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="add-job" element={<AddJob />} />
        <Route path="profile" element={<Profile />} />
        <Route path="stats" element={<Stats />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
