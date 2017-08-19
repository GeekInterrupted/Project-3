import configMongoose from "./configMongoose";
import sessionRoutes from "./routesSession";
const Entry = configMongoose.Entry;

const TravelDiaryRoutes = [
    //spreading sessionRoutes will make the login route available accross Falcor routes
    ...sessionRoutes,
    {
    route: "entries.length",
    //return a Mongoose promise with get
    //Entry.count retrieves the number of entries in the Entry model
    get: () => Entry.count({}, (err, count) => count)
    .then ((entriesCountInDB) => {
        return {
            path: ["entries", "length"],
            value: entriesCountInDB
        };
    })
},
{
    route: 'entries[{integers}]["entryTitle", "entryContent"]',
    get: (pathSet) => {
        const entriesIndex = pathSet[1];

        return Entry.find({}, (err, entryDocs) => entryDocs)
        .then ((entriesArrayFromDB) => {
            let results = [];

            entriesIndex.forEach((index) => {
                const singleEntryObject = entriesArrayFromDB[index].toObject();
                const falcorSingleEntryResult = {
                    path: ["entries", index],
                    value: singleEntryObject
                };
                
                results.push(falcorSingleEntryResult);

            });
            console.log("single entry results: ",results);
            return results;
            });   
        }
    }
];

export default TravelDiaryRoutes;