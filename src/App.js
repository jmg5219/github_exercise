import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "bulma/css/bulma.css";
import { Container } from "bloomer";

import './App.css';
import IssueList from './components/IssueList';
import Issue from './components/Issue';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <IssueList />
        </Container>

      </Router>


    </div>
  );
}

export default App;
