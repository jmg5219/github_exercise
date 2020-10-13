import React from 'react';
import {useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Title } from "bloomer";

const Issue = (props) => {
    const { issuesList } = props;
    const {issue_number} =useParams();
    const issue = issuesList.find((issue)=>{
        return issue.number === parseInt(issue_number) ? issue : null;
        
    })
   
    return (

        <div>
            <Title>{issue.title}</Title>
            <br/>
            <a href={issue.url} >{issue.url}</a>
            <br/>
            <ReactMarkdown source={issue.body} escapeHtml={false} />
        </div>


    );
}

export default Issue