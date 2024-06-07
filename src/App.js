import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

import { Main } from './pages/main/main';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/main" ></Navigate>}
        >
        </Route>
        <Route exact path="/main" element={<Main />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
