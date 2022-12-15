// array making names for numbers in week array
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apiURL =
  "//api.openweathermap.org/data/2.5/forecast?id=5780026&appid=356839bb540183cc883c1c645c9007d4&units=imperial";
// id for provo is id=5780026, zipcode is zip=84606
// Go fetch it and wait for a response
fetch(apiURL).then((response) =>
  response.json().then((weatherInfo) => {
    // Once it comes back, display it to the console
    console.log(weatherInfo);
    document.getElementById("townName").innerHTML = weatherInfo.city.name;

    const mydate = new Date();
    const todayDayNum = mydate.getDay();
    let forcastDayNum = todayDayNum;

    // weatherInfo array list of 5 days in 3 hour increments
    let mylist = weatherInfo.list;

    for (i = 0; i < mylist.length; i++) {
      var time = mylist[i].dt_txt;
      // looking for time of 19 because that's noon in Utah time. Add 7 hours to UTC time and you get Utah time
      if (time.includes("18:00:00")) {
        console.log(
          "Found an entry with 18:00:00 in the time. It was report " +
            i +
            " from the mylist of 40"
        );
        // add day for that forecast
        let theDayName = document.createElement("h2");
        theDayName.textContent = weekday[forcastDayNum];
        // add temperature
        let theTemp = document.createElement("p");
        theTemp.textContent = mylist[i].main.temp + "\u00B0F";
        // add weather icon code
        let iconcode = mylist[i].weather[0].icon;
        let icon_path = "//openweathermap.org/img/wn/" + iconcode + "@2x.png";
        let theIcon = document.createElement("img");
        theIcon.src = icon_path;
        //create div to append all info to for the day
        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById("weatherForecast").appendChild(theDay);
        // increment forecast day
        forcastDayNum += 1;
        if (forcastDayNum === 7) {
          forcastDayNum = 0;
        }
      } // end if
    } // end for
  })
); //end of .then fat arrow function
