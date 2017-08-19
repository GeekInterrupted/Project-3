import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import falcor from "falcor";
import falcorRouter from "falcor-router";
import falcorExpress from "falcor-express";
import mongoose from "mongoose";
import routes from "./routes.js";

// Our scraping tools
const request = require("request");
const cheerio = require("cheerio");

const app = express();

app.server = http.createServer(app);

//CORS - 3rd party middleware
app.use(cors());

//Manage Falcor at the backend
app.use(bodyParser.json({extended: false}));

app.use(bodyParser.urlencoded({extended: false}));

app.use('/model.json', falcorExpress.dataSourceRoute((req, res) => {
    return new falcorRouter(routes);
}));

app.use(express.static("dist"));

app.get("/", (req, res) => {
    Entry.find((err, entryDocs) => {
        const theEntries = entryDocs.map((entryItem) => {
        return `<h2>${entryItem.entryTitle}</h2>
            ${entryItem.entryContent}`;
        }).join("<br >");
        res.send(`<h1>Initial view of application</h1>
        ${theEntries}`);
    });
});

app.server.listen(process.env.PORT || 3000);
console.log(`Server is listening to you on port ${app.server.address().port}`);

app.post("/embassy", (req,res)=>{
    // assign country being sent from the front end to the link
    let getWarningLink = `https://travel.state.gov/content/passports/en/country/${req.body.country}.html`;
    let getEmbassyLink = `https://www.usembassy.gov/${req.body.country}/`
    let result = [];
    
    request(getEmbassyLink, function(err, res, body){

        const $ = cheerio.load(body);
        // Iterate the results
        $(".cityname1").each(function(i, element){
            // select only the fist result
            if(i == 0){
                // grab the whole text and split line break
                const fullText = $(this).text().split("\n")
                // initialize an array
                let embassyInfo = []
                // Interate the fulltext after spliting
                for(let i = 0; i < fullText.length; i++){
                    // assign each of the spliting text to each variable
                    embassyInfo[i] = fullText[i] 
                }
                
                // initialize an object and assign keys and values
                const embassy = {
                        link: $(this).find("a").attr("href"),
                        embassy: embassyInfo
                    }

                // then push the object inside the result array
                result.push(embassy);
            }   
        })
    })

    // Make a request
    request(getWarningLink, function(error, response, html) {
        const $ = cheerio.load(html);
            // grab the data from specific class
            $(".warning_alerts_content").children("ul").each(function(i, element){
                // select the second section
                if (i == 1){
                    // Iterate its children
                    $(this).children("li").each(function(i, element){        
                        // We grab the first one as a warning
                        if(i == 0){
                            // Grab its text
                            const warning = {
                                warning: $(this).find("a").text().trim(),
                                link: `https://travel.state.gov`+ $(this).find("a").attr("href"),
                                date: $(this).find("span").text().trim()
                            }
                            // If there is a warning
                            if(warning.warning !== undefined){
                                result.push(warning);
                            }
                            // We grab the second one as an alert
                        } else {
                            // Grab its text
                            const alert = {
                                alert: $(this).find("a").text().trim(),
                                link: `https://travel.state.gov`+ $(this).find("a").attr("href"),
                                date: $(this).find("span").text().trim()
                            }
                            // If there is an alert
                            if(alert.alert !== undefined){
                                result.push(alert);
                            }
                        } 
                    })
                }
            })
        // send back to the client side
        console.log("this is the result: ", result);
        res.json(result);
    });
})

export default app;
