import React from 'react'
import { render } from 'react-dom'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

import ResolutionForm from './resolutionForm';


const App = ({data}) => {
    if(data.loading) return null;

    return <div>
        <h1>{data.hi}</h1>
        <ResolutionForm/>
        <ul>
        {data.resolutions.map((resolution, i) => {
            return <li key={i}>{resolution.name}</li>
        })
        }
        </ul>
    </div>
};

const hiQuery = gql`
{
  hi
  resolutions {
    _id
    name
  }
}

`;

export default graphql(
    hiQuery
)
(App)