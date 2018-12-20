import Resolutions from './resolutions';

// Resolutions.insert({
//     name: 'test'
// })


export default {
    Query: {
        resolutions(obj, args, { userId }){
            return Resolutions.find({userId: userId}).fetch();
        }
    },

    Mutation: {
        createResolution(obj, { name }, context){
            const resolutionId = Resolutions.insert({
                name
            });
            return Resolutions.findOne(resolutionId)
        }
    }
}