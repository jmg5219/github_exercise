import React from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Issue = (props) => {
    const { issuesList } = props;
    const {issue_number} =useParams();
    const issue = issuesList.find((issue)=>{
        return issue.number === parseInt(issue_number) ? issue : null;
        
    })
   
    return (

        <div>
            <h2>{issue.title}</h2>
            <br/>
            <a href={issue.url} >{issue.url}</a>
            <br/>
            <ReactMarkdown source={issue.body} escapeHtml={false} />
        </div>


    );
}

export default Issue