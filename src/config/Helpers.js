// import HTTP request helper
import axios from "axios";

const Helpers = {
    getCurrencyRate: countryTerm=>{
         // assigne URL variable for making http request with axios
         let restURL = `https://restcountries.eu/rest/v2/name/${countryTerm}`;
         axios.get(restURL).then(res=>{
             console.log(`This is a resonse from rest country`);
             console.log(res.data);
 
             // Then  Grab the currency and assign to variable
             const currency = res.data[0].currencies[0].code
             const  fixerURL = "http://api.fixer.io/latest?base=USD"
                 // Make another http request to get x rate against the USD
                 axios.get(fixerURL).then(res=>{
                     console.log(res.data.rates)
                     // Loop throgh res.rates objects
                     for(var xCurrency in res.data.rates){
                         // Compare if curreny inside of that object equal curreny from the search of country
                         if(xCurrency === currency){
                             document.body.append(`1USD = ${res.data.rates[xCurrency]} ${xCurrency}`);
                             return console.log(`This is xRate per 1 USD = ${res.data.rates[xCurrency]}`);
                         }
                    }
                        document.body.append(`Currency of ${currency} is not found`);
                 })
         })
 
    },

    getEmbassyAndWaring: countryTerm=>{
      axios.post("/embassy", {country:countryTerm}).then(data=>{
          console.log(data);
      })
    }
}

export default Helpers;