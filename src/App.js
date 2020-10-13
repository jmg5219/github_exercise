import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import IssueList from './components/IssueList';
import Issue from './components/Issue';

function App() {
  return (
    <div className="App">
      <Router>
        <IssueList />
      </Router>


    </div>
  );
}

export default App;
