// import HTTP request helper
import axios from "axios";

const Helpers = {

    getEmbassyAndWaring: countryTerm=>{
        
    // making a post request to server to handle gettinh embasy info and warning
      return axios.post("/embassy", {country:countryTerm}).then(data=>{
        //  send data that we get from server to Search component
        return(data.data);
      })
    },

    getCurrencyRate: countryTerm=>{
         // assigne URL variable for making http request with axios
         let restURL = `https://restcountries.eu/rest/v2/name/${countryTerm}`;
         return axios.get(restURL).then(response=>{
             console.log(`This is a response from rest country`);
             console.log(response.data);
 
             // Then  Grab the currency and assign to variable
             const currency = response.data[0].currencies[0].code
             const  fixerURL = "http://api.fixer.io/latest?base=USD"
                 // Make another http request to get x rate against the USD
                 return axios.get(fixerURL).then(res=>{
                     console.log(res.data.rates)
                     // Loop throgh res.rates objects
                     for(var xCurrency in res.data.rates){
                         // Compare if curreny inside of that object equal curreny from the search of country
                         if(xCurrency === currency){
                              console.log(`This is xRate per 1 USD = ${res.data.rates[xCurrency]}`);
                              return ({
                                  currency: currency,
                                  xRate: res.data.rates[xCurrency],
                                  lat: response.data[0].latlng[0],
                                  lng: response.data[0].latlng[1],
                                  country: response.data[0].name,
                                  flag: response.data[0].flag
                              })
                         }
                    }
                 })
         })
 
    }

}

export default Helpers;