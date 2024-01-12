// EmployerRoutes.js
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'; // Update the import path
import Create from './Pages/Create'; // Update the import path

function EmployerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default EmployerRoutes;
