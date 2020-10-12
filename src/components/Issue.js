import React from 'react';

const Issue = (props) => {
    const { issue } = props;
    console.log(issue)



    return (

        <div>
            {issue.title}
            <a href={issue.url} >{issue.url}</a>
            {issue.body}
        </div>


    );
}

export default Issue