import React, { Component } from 'react';
import Issue from './Issue';

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
            <div>
                    {!!issuesList.length?(<ul>
                    {issuesList.map((issue, index) => (
                            
                            <li key={issue.id}><Issue issue={issue} /></li>
              
                    ))}
                    </ul>):(<li></li>)}
                    
                


                
            </div>


        )

    }

}



export default IssueList