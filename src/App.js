import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, Register, Dashboard, Error } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
