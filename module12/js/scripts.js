// what is the path to the JSON file?
const apiURL = [
  {
    name: "Southern Serenade",
    photo: "images/serenade.jpg",
    address: ["1555 North Canyon Dr.", "Lexington, VA 88765"],
    phone: "1-307-886-1234",
  },
  {
    name: "The Grand America Hotel",
    photo: "images/america.jpg",
    address: ["555 Main St.", "Salt Lake City UT, 84111"],
    phone: "1-307-886-1234",
  },
  {
    name: "Four Seasons",
    photo: "images/season.jpg",
    address: ["2019 Pennsylvania Ave", "Washington, DC 20125"],
    phone: "1-303-389-2000",
  },
  {
    name: "Hyatt Place Washington",
    photo: "images/hyatt.jpg",
    address: ["1555 North Canyon Dr.", "Lexington VA 88765"],
    phone: "1-202-828-2500",
  },
];

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (let i = 0; i < myList.length; i++) {
      let myImageTag = document.createElement("img");
      myImageTag.src = myList[i].photo;

      let myCaptionTag = document.createElement("figcaption");
      myCaptionTag.textContent = myList[i].name;

      let myFigureTag = document.createElement("figure");
      myFigureTag.appendChild(myImageTag);
      myFigureTag.appendChild(myCaptionTag);

      let myCarIcon = document.createElement("ion-icon");
      myCarIcon.name = "car";

      let streetaddressTag = document.createElement("p");
      streetaddressTag.textContent = myList[i].address[0];

      let regionaddressTag = document.createElement("p");
      regionaddressTag.textContent = myList[i].address[1];

      let mySpanTag1 = document.createElement("span");
      mySpanTag1.appendChild(myCarIcon);
      mySpanTag1.appendChild(streetaddressTag);
      mySpanTag1.appendChild(regionaddressTag);

      let myPhoneIcon = document.createElement("ion-icon");
      myPhoneIcon.name = "call";

      let phoneTag = document.createElement("p");
      phoneTag.textContent = myList[i].phone;

      let mySpanTag2 = document.createElement("span");
      mySpanTag2.appendChild(myPhoneIcon);
      mySpanTag2.appendChild(phoneTag);

      let myDiv = document.createElement("div");
      myDiv.appendChild(mySpanTag1);
      myDiv.appendChild(mySpanTag2);

      let mySection = document.createElement("section");
      mySection.appendChild(myFigureTag);
      mySection.appendChild(myDiv);

      document.getElementById("myCards").appendChild(mySection);
    }
  }); //end of "then" fat arrow function
