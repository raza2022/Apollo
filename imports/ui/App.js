import React from 'react'
import { render } from 'react-dom'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

import ResolutionForm from './resolutionForm';
import RegistrationForm from './registrationForm';
import LoginForm from './loginForm';


const App = ({loading, resolutions}) => {
    if(loading) return null;

    return <div>
        <RegistrationForm />
        <LoginForm />
        <ResolutionForm />
        <ul>
        {resolutions.map((resolution, i) => {
            return <li key={i}>{resolution.name}</li>
        })
        }
        </ul>
    </div>
};

const resolutionsQuery = gql`
 query Resolutions {
  resolutions {
    _id
    name
  }
}

`;

export default graphql(resolutionsQuery, {
    props: ({data}) => ({...data})
})(App)