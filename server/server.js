import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/localdb");

const countrySchema = {
    countryName:String,
    countryCapital:String,
    countryCallingCodes:[String],
    countryLang:String,
    countryCurrency:[Schema.Types.Mixed],
    countryWarnings:boolean,
    countryFlag:String
};

const Country = mongoose.model("Country", countrySchema, "countries");

const app = express();
app.server = http.createServer(app);

//CORS - 3rd party middleware
app.use(cors());

app.use(bodyParser.json({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/static', express.static('dist'));

app.get("/", (req, res) => {
    Country.find((err, countryDocs) => {
        const theCountries = countryDocs.map((countryItem) => {
        return `<h2>${countryItem.countryName}</h2>
            ${countryItem.countryLang}`;
        }).join("<br >");
        res.send(`<h1>Initial view of application</h1>
        ${theCountries}`);
    });
});

app.get("/", (req, res) => res.send("Initial view of application"));
app.server.listen(process.env.PORT || 3000);
console.log(`Server is listening to you on port ${app.server.address().port}`);