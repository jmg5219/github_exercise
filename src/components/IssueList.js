import React, { useEffect,useState } from 'react';
import Issue from './Issue';
import { Route, Link } from 'react-router-dom';
import { Title } from "bloomer";

import './issuelist.css';



const IssueList = props => {
  const [issuesList, setIssues] = useState([]); 

  //Similar to a lifcycle method, fetch and set the state (IIFE)
  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://api.github.com/repos/facebook/create-react-app/issues`
      );
      const issuesList = await response.json();
      setIssues(issuesList);
    })();
  }, [setIssues]);

  return (
    <>
        {!!issuesList.length ? (
    <>
        
       
        <Route exact path="/">
            <Title>Github Issues List</Title>
            <ul>
                {issuesList.map((issue, index) => {
                    return (
                        <li key={issue.id}>{issue.title}<br/>
                            <Link to={`/issue/${issue.number}`}>View Details</Link>
                        </li>
                    );
                }
                )}
            </ul>
        </Route>
        <Route path={`/issue/:issue_number`}>
            <Link to="/">Return to list</Link>
            <Issue issuesList={issuesList} />
        </Route>

    </>
    ) : (<p>fetching issues...</p>)}
    </>
  );

}




export default IssueList