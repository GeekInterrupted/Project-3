import falcor from "falcor";
import FalcorDataSource from "falcor-http-datasource";

let cache = {
        countries: [
            {
        id: 123456,
        countryName: "Colombia",
        countryCapital:"Bogota",
        countryCallingCodes: ["57"],
        countryLang: "Spanish",
        countryCurrency: [{
            code:"COP",
            name:"Colombian Peso",
            symbol: "$"
        }],
        flag:"https://restcountries.eu/data/col.svg"
             },
            {
        id: 789010,
        countryName: "Spain",
        countryCapital:"Madrid",
        countryCallingCodes:["34"],
        countryLang: "Spanish",
        countryCurrency: [{
            code:"EUR",
            name:"Euro",
            symbol: "€"
        }],
        flag:"https://restcountries.eu/data/esp.svg"
             }
         ]
    };

    const model = new falcor.Model({
        "cache": cache
    });
    export default model;