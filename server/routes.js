import configMongoose from "./configMongoose";
import sessionRoutes from "./routesSession";
const Country = configMongoose.Country;

const TravelDiaryRoutes = [
    //spreading sessionRoutes will make the login route available accross Falcor routes
    ...sessionRoutes,
    {
    route: "countries.length",
    get: () => Country.count({}, (err, count) => count)
    .then ((countriesCountInDB) => {
        return {
            path: ["countries", "length"],
            value: countriesCountInDB
        };
    })
},
{
    route: 'countries[{integers}]["id", "countryName", "countryLang"]',
    get: (pathSet) => {
        const countriesIndex = pathSet[1];

        return Country.find({}, (err, countryDocs) => countryDocs)
        .then ((countriesArrayFromDB) => {
            let results = [];

            countriesIndex.forEach((index) => {
                const singleCountryObject = countriesArrayFromDB[index].toObject();
                const falcorSingleCountryResult = {
                    path: ["countries", index],
                    value: singleCountryObject
                };
                
                results.push(falcorSingleCountryResult);

            });
            console.log("single country results: ",results);
            return results;
            });   
        }
    }
];

export default TravelDiaryRoutes;