import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';

import './App.scss';
import Navbar from './components/Navbar/Navbar';


function App() {
  const routes = useRoutes()
  return (
    <Router>
      <Navbar />
      <div className="App">
        {routes}
      </div>
    </Router>
  );
}

export default App;
