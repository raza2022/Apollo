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
          const goals = Goals.find({
              resolutionId: resolution._id,
          }).fetch();

          const completedGoals = goals.filter((goal) => goal.completed);

          if(!goals.length) return false;
          return goals.length === completedGoals.length
      }
    },

    Mutation: {
        createResolution(obj, { name }, { userId }){
            if(userId){
                const resolutionId = Resolutions.insert({
                    name,
                    userId,
                    completed: false
                });
                return Resolutions.findOne(resolutionId)
            }
            throw new Error("Unauthorized")

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