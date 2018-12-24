import Resolutions from './resolutions';
import Goals from '/imports/api/goals/goals'

export default {
    Query: {
        resolutions(obj, args, { userId }){
            return Resolutions.find({ userId }).fetch();
        }
    },

    Resolution: {
      goals: (resolution) => {
          return Goals.find({
              resolutionId: resolution._id
          }).fetch();
      },
      completed: (resolution) => {
          return !Goals.findOne({
              resolutionId: resolution._id,
              completed: false
          })
      }
    },

    Mutation: {
        createResolution(obj, { name }, { userId }){
            const resolutionId = Resolutions.insert({
                name,
                userId,
                completed: false
            });
            return Resolutions.findOne(resolutionId)
        },

        toggleGoal(obj, { _id }){
            const goal = Goals.findOne(_id);
            Goals.update(_id, {
                $set: {
                    completed: !goal.completed
                }
            });
            return Goals.findOne(_id)
        }
    },

}