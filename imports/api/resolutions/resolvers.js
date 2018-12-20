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
      }
    },

    Mutation: {
        createResolution(obj, { name }, { userId }){
            const resolutionId = Resolutions.insert({
                name,
                userId
            });
            return Resolutions.findOne(resolutionId)
        }
    }
}