import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Feed, Dashboard, Create } from "./Pages";
import EmployerRoutes from "./EmployerRoutes";
import EmployeeRoutes from "./EmployeeRoutes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer/*" element={<EmployerRoutes />} />
        <Route path="/employee/*" element={<EmployeeRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;

