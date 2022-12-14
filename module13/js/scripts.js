const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5780026&appid=356839bb540183cc883c1c645c9007d4&units=imperial";
// Go fetch it and wait for a response
fetch(apiURL).then((response) =>
  response.json().then((weatherInfo) => {
    // Once it comes back, display it to the console
    console.log(weatherInfo);
  })
); //end of .then
