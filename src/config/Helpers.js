// import HTTP request helper
import axios from "axios";

const Helpers = {

    getEmbassyAndWarning: countryTerm=>{
        
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
 
             // Then  Grab the currency and assign to variable
             const currency = response.data[0].currencies[0].code

                const  fixerURL = "https://api.fixer.io/latest?base=USD"
                    // Make another http request to get x rate against the USD
                    return axios.get(fixerURL).then(res=>{
                        // Loop throgh res.rates objects
                            let length = 0;
                        for(var xCurrency in res.data.rates){
                            if( res.data.rates.hasOwnProperty(xCurrency) ) {
                                ++length;
                            
                            //Compare if curreny inside of that object equal curreny from the search of country
                            if(xCurrency === currency){
                                return ({
                                    currency: currency,
                                    xRate: res.data.rates[xCurrency],
                                    lat: response.data[0].latlng[0],
                                    lng: response.data[0].latlng[1],
                                    country: response.data[0].name,
                                    nativeName: response.data[0].nativeName,
                                    language: response.data[0].languages[0].name,
                                    flag: response.data[0].flag
                                });

                            // If there is no match then return xRate with 0
                            } else if (xCurrency !== currency && length == 31){
                                    return ({
                                        currency: currency,
                                        xRate: 0,
                                        lat: response.data[0].latlng[0],
                                        lng: response.data[0].latlng[1],
                                        country: response.data[0].name,
                                        nativeName: response.data[0].nativeName,
                                        language: response.data[0].languages[0].name,
                                        flag: response.data[0].flag
                                    });
                                }
                            }
                        }
                    })
         })
 
    },

    // This function posts comment to our database.
    postComment: (country, user, comment)=>{
        return axios.post("/post/comment", { country: country, user: user, comment: comment }).then((result)=>{ 
            return (result.data);
        });
    },

    // This function get comments to our database.
    getComments: (country)=>{
        return axios.get(`/get/comments/${country}`).then((data)=>{ 
            return (data.data);
        });

    },

    // This function posts like to back end
    postLike: (id, user)=>{
        return axios.post(`/post/like`, {id: id, user: user}).then((like)=>{ 
            return (like.data);
        });

    },

    // This function posts dislike to back end
    postDislike: (id, user)=>{
        return axios.post(`/post/dislike`, {id: id, user: user}).then((dislike)=>{ 
            return (dislike.data);
        });

    }

}

export default Helpers;