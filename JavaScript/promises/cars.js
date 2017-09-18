const fetch = require("node-fetch");

// fetch(
//   "https://www.ncdc.noaa.gov/cag/time-series/global/globe/land_ocean/ytd/12/1880-2016.json"
// )
//   .then(response => response.json())
//   .then(json => console.log(json));

urls = [
  "https://www.ncdc.noaa.gov/cag/time-series/global/globe/land_ocean/ytd/12/1880-2016.json",
  "https://www.ncdc.noaa.gov/cag/time-series/us/110/00/tavg/ytd/12/1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000",
  "https://www.ncdc.noaa.gov/cag/time-series/us/110/00/pcp/ytd/12/1895-2016.json?base_prd=true&begbaseyear=1901&endbaseyear=2000"
];

function fetchJSON(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err.message));
}

fetchJSON(urls[2]);

urls.forEach(url => fetchJSON(url));
