import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/localdb");

const countrySchema = {
    countryName:String,
    countryLang:String
};

const Country = mongoose.model("Country", countrySchema, "countries");

const TravelDiaryRoutes = [
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