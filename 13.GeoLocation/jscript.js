const btn = document.getElementById("btn");
const countryMap = document.getElementById("country-container");
const address = document.getElementById("place");



function geo() {
  console.log("got clicked");
  if ("geolocation" in navigator) {
    console.log("got it ");
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      countryMap.innerHTML = `<iframe
      src="http://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed"
      width="100%"
      height="100%"
      frameborder="0"
      style="border: 0"
      allowfullscreen
    ></iframe>`;
      getLocation(latitude, longitude);
    });
  }
}

const getLocation = async (latitude, longitude) => {
  try {
    const access_key = "here your access key will go.";
    const url = `http://api.positionstack.com/v1/reverse?access_key=${access_key}&query=${latitude},${longitude}`;
    const response = await (await fetch(url)).json().then((result) => {
      const data = result.data[0];
      console.log(data);

      /*
      
administrative_area
: 
null
confidence
: 
0.6
continent
: 
"Asia"
country
: 
"India"
country_code
: 
"IND"
county
: 
"Pune"
distance
: 
0.547
label
: 
"Hinjawadi Hospital, Pimpri, MH, India"
latitude
: 
18.595074
locality
: 
"Pimpri"
longitude
: 
73.735057
name
: 
"Hinjawadi Hospital"
neighbourhood
: 
null
number
: 
null
postal_code
: 
"411057"
region
: 
"Maharashtra"
region_code
: 
"MH"
street
: 
null
type
: 
"venue"
      */
      address.innerHTML = `<h3>Continent <span id="contiinent">${data.continent}</span></h3>
            <h3>Country :   <span id="region">${data.country}</span></h3>
            <h3>Region  :   <span id="region">${data.region}</span></h3>
            <h3>City  :   <span id="region">${data.county}</span></h3>
            <h3>Street :   <span id="street">${data.name}</span></h3>
            <p>Address : ${data.label} </p>
         `;
    });
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener("click", geo);
