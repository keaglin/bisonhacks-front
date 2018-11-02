// I forgot how Wes did it but basically, we wanna keep the secrets secret lmao
// and even after we pass these, we need to build the request link from form data
// before we POST 

import ORGHUNTER from "./secrets"

export const LOCATION = `https://data.orghunter.com/v1/charitygeolocation?user_key=${ORGHUNTER}`
// Take 2 params (API key and Charity EIN [which we'll prob have gotten from the search]) and returns detailed info about 1 specific charity

export const SEARCH_URL   = `http://data.orghunter.com/v1/charitysearch?user_key=${ORGHUNTER}`
// SEARCH_URL returns a list of orgs based on search criteria
