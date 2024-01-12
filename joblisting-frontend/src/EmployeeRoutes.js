// EmployeeRoutes.js
import { Routes, Route } from 'react-router-dom';
import { Feed } from './Pages';
//import Feed from './Feed';

function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}

export default EmployeeRoutes;
