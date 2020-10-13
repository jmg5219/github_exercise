import React, { Component } from 'react';
import Issue from './Issue';
import { Route, Link } from 'react-router-dom';

import './issuelist.css';


class IssueList extends Component {
    state = {
        issuesList: [],
    };

    //Obtaining API Data
    APIData = async () => {
        //Modified the helper function to take an argument corresponding to a category to search within the API
        const response = await fetch('https://api.github.com/repos/facebook/create-react-app/issues');
        const data = await response.json();
        return data;
    };




    async componentDidMount() {
        console.log("The component mounted");
        //On page load, this will present data from the initial API fetch
        const issuesList = await this.APIData();
        //console.log(IssueList)
        //We are also setting the State on Page load
        this.setState({
            issuesList: issuesList,
        });
        console.log(this.state.issuesList)

    }
    render() {
        const { issuesList } = this.state
        return (
            <>

                {!!issuesList.length ? (
                    <>
                        <h1>Github Issues</h1>
                        <Route exact path="/">
                            <ul>
                                {issuesList.map((issue, index) => {
                                    return (
                                        <li key={issue.id}>{issue.title}
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


        )

    }

}



export default IssueList