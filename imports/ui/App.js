import React from 'react'
import { render } from 'react-dom'
import gql from 'graphql-tag';
import { graphql, withApollo } from 'react-apollo'

import ResolutionForm from './resolutionForm';
import RegistrationForm from './registrationForm';
import GoalForm from './goalForm';
import LoginForm from './loginForm';
import Goal from './resolutions/Goal';


const App = ({loading, resolutions, client, user }) => {
    if(loading) return null;

    return <div className="auth-container">
        {user._id ? <button onClick={() => {
                Meteor.logout();
                client.resetStore();
            }}>logout</button>

         : <div>
                <LoginForm client={client}/>
                <RegistrationForm client={client}/>
            </div>}


        {user._id && <ResolutionForm />}
        {user._id && <ul>
            {resolutions.map((resolution, i) => {
                return <li key={resolution._id}>
                <span style={{
                    textDecoration: resolution.completed ? "line-through" : "none"
                }}>{resolution.name}</span>
                    <ul>
                        {resolution.goals.map((goal) => {
                            return <Goal goal={goal} key={goal._id}/>
                        })}
                    </ul>
                    <GoalForm resolutionId={resolution._id}/>
                </li>
            })
            }
        </ul>
        }
    </div>
};

const resolutionsQuery = gql`
 query Resolutions {
  resolutions {
    _id
    name
    completed
    goals{
        _id
        name
        completed
    }
  }
  user {
    _id
  }
}

`;

export default graphql(resolutionsQuery, {
    props: ({data}) => ({...data})
})(withApollo(App))