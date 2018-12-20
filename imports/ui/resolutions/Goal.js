import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class Goal extends Component {
    toggleGoal = () => {
      this.props.toggleGoal({
          variables: {
              id: this.props.goal._id
          }
      })
    };
    render(){
        return (
            <div>
                <li>
                    <input type="checkbox" onClick={this.toggleGoal} checked={this.props.goal.completed}/>
                    {this.props.goal.name}
                </li>
            </div>
        )
    }
}

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
        _id
    }
  }  
`;


export default graphql(toggleGoal, {
    name: "toggleGoal",
    options: {
        refetchQueries: ['Resolutions']
    }
})(Goal)