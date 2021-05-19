//DOM

var obj = document.getElementsByClassName("HomeBody");
//Variables
let isDarkMode = true;
// Functions
function changeDarkMode() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.getElementById("HomeBody").style.backgroundColor = "#1b2631";
    document.getElementById("HomeHeader").style.backgroundColor = "#2e4053";
    document.getElementById("HomeHeaderTitle").style.color = "white";
    document.getElementById("HomeHeaderDarkMode").style.color = "white";
    let card = document.getElementsByClassName("HomeCountryCard");
    let countryName = document.getElementsByClassName(
      "HomeCountryCardCountryName"
    );
    let countryPopulation = document.getElementsByClassName(
      "HomeCountryCardCountryPopulation"
    );
    let countryReigon = document.getElementsByClassName(
      "HomeCountryCardCountryReigon"
    );
    let countryCapital = document.getElementsByClassName(
      "HomeCountryCardCountryCapital"
    );
    for (let i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "#2e4053";
      countryName[i].style.color = "white";
      countryPopulation[i].style.color = "white";
      countryReigon[i].style.color = "white";
      countryCapital[i].style.color = "white";
    }
  } else {
    document.getElementById("HomeBody").style.backgroundColor = "#ECEAEA";
    document.getElementById("HomeHeader").style.backgroundColor = "white";
    document.getElementById("HomeHeaderTitle").style.color = "#000000";
    document.getElementById("HomeHeaderDarkMode").style.color = "#000000";
    let card = document.getElementsByClassName("HomeCountryCard");
    let countryName = document.getElementsByClassName(
      "HomeCountryCardCountryName"
    );
    let countryPopulation = document.getElementsByClassName(
      "HomeCountryCardCountryPopulation"
    );
    let countryReigon = document.getElementsByClassName(
      "HomeCountryCardCountryReigon"
    );
    let countryCapital = document.getElementsByClassName(
      "HomeCountryCardCountryCapital"
    );
    for (let i = 0; i < card.length; i++) {
      card[i].style.backgroundColor = "white";
      countryName[i].style.color = "#000000";
      countryPopulation[i].style.color = "#000000";
      countryReigon[i].style.color = "#000000";
      countryCapital[i].style.color = "#000000";
    }
  }
}

function displayData() {
  fetch("https://restcountries.eu/rest/v2/all", {
    method: "GET",
  }).then((res) =>
    res.json().then((result) => {
      for (let i = 0; i < result.length; i++) {
        createCard(
          result[i].flag,
          result[i].name,
          result[i].population,
          result[i].region,
          result[i].capital,
          result[i].alpha2Code
        );
      }
    })
  );
}
displayData();

function createCard(
  countryFlagParam,
  countryNameParam,
  countryPopulationValueParam,
  countryReigonValueParam,
  countryCapitalValueParam,
  code
) {
  let grid = document.getElementsByClassName("cardsGrid")[0];
  let card = document.createElement("div");

  let countryFlag = document.createElement("img");

  let countryName = document.createElement("h3");

  let populationDiv = document.createElement("div");
  let countryPopulation = document.createElement("p");
  let countryPopulationValue = document.createElement("p");

  let reigonDiv = document.createElement("div");
  let countryReigon = document.createElement("p");
  let countryReigonValue = document.createElement("p");

  let capitalDiv = document.createElement("div");
  let countryCapital = document.createElement("p");
  let countryCapitalValue = document.createElement("p");

  card.className = "HomeCountryCard";

  countryFlag.src = countryFlagParam;
  countryFlag.className = "HomeCountryCardImage";

  countryName.innerHTML = countryNameParam;
  countryName.className = "HomeCountryCardCountryName";

  populationDiv.className = "HomeCountryCardCountryPopulation";
  countryPopulation.innerHTML = "Population : ";
  countryPopulationValue.innerHTML = countryPopulationValueParam;

  reigonDiv.className = "HomeCountryCardCountryReigon";
  countryReigon.innerHTML = "Reigon : ";
  countryReigonValue.innerHTML = countryReigonValueParam;

  capitalDiv.className = "HomeCountryCardCountryCapital";
  countryCapital.innerHTML = "Capital : ";
  countryCapitalValue.innerHTML = countryCapitalValueParam;

  countryPopulation.className = "HomeBoldKey";
  countryReigon.className = "HomeBoldKey";
  countryCapital.className = "HomeBoldKey";
  capitalDiv.appendChild(countryCapital);
  capitalDiv.appendChild(countryCapitalValue);

  reigonDiv.appendChild(countryReigon);
  reigonDiv.appendChild(countryReigonValue);

  populationDiv.appendChild(countryPopulation);
  populationDiv.appendChild(countryPopulationValue);

  card.appendChild(countryFlag);
  card.appendChild(countryName);
  card.appendChild(populationDiv);
  card.appendChild(reigonDiv);
  card.appendChild(capitalDiv);

  grid.appendChild(card);
  card.addEventListener("click", function () {
    window.open(
      "/home/maher/Desktop/firstTask/View/view.html?code=" +
        code +
        "&dark=" +
        isDarkMode
    );
  });
}
console.log("Empty commit");
