import Resolutions from './resolutions';

// Resolutions.insert({
//     name: 'test'
// })


export default {
    Query: {
        resolutions(){
            return Resolutions.find({}).fetch();
        }
    },

    Mutation: {
        createResolution(){
            console.log("got here")
            // const resolutionId = Resolutions.insert({
            //     name: 'test1'
            // })
        }
    }
}