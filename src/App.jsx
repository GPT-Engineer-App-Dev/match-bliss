import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfileCreation from "./pages/ProfileCreation";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create-profile" element={<ProfileCreation />} />
      </Routes>
    </Router>
  );
}

export default App;
