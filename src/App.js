import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Register, Error, ProtectedPage } from "./pages";
import {
  AllJobs,
  AddJob,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedPage>
              <SharedLayout />
            </ProtectedPage>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
