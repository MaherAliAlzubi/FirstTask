// https://restcountries.eu/rest/v2/callingcode/963

let code = document.location.search.substring(6, 8);
let isDarkMode = document.location.search.substring(14, 15);
if (isDarkMode == "t") isDarkMode = true;
else isDarkMode = false;
displayTheme(isDarkMode);
function getDetails() {
  fetch("https://restcountries.eu/rest/v2/alpha/" + code, {
    method: "GET",
  }).then((res) =>
    res.json().then((result) => {
      let currencies = "";
      let languages = "";
      for (let i = 0; i < result.languages.length; i++)
        languages += result.languages[i].name + ",";
      for (let i = 0; i < result.currencies.length; i++)
        currencies += result.currencies[i].code + ",";
      currencies = currencies.substring(0, currencies.length - 1);
      languages = languages.substring(0, languages.length - 1);
      manipulate(
        result.flag,
        result.name,
        result.nativeName,
        result.population,
        result.region,
        result.subregion,
        result.capital,
        result.topLevelDomain[0],
        currencies,
        languages,
        result.borders
      );
      console.log(result);
    })
  );
}

getDetails();
function manipulate(
  countryFlag,
  countryName,
  nativeNameParam,
  populationParam,
  regionParam,
  subRegionParam,
  capitalParam,
  topLevelDomainParam,
  currenciesParam,
  languagesParam,
  bordersParam
) {
  let image = document.getElementsByClassName("ViewFlag")[0];
  image.src = countryFlag;
  let name = document.getElementsByClassName("ViewCountryName")[0];
  name.innerHTML = countryName;

  let nativeName = document.getElementsByClassName("ViewCountryNativeName")[0];
  nativeName.innerHTML = nativeNameParam;
  let population = document.getElementsByClassName("ViewCountryPopulation")[0];
  population.innerHTML = populationParam;
  let region = document.getElementsByClassName("ViewCountryReigon")[0];
  region.innerHTML = regionParam;
  let subRegion = document.getElementsByClassName("ViewCountrySubReigon")[0];
  subRegion.innerHTML = subRegionParam;

  let capital = document.getElementsByClassName("ViewCountryCapital")[0];
  capital.innerHTML = capitalParam;

  let topLevelDomain = document.getElementsByClassName(
    "ViewCountryTopLevelDomain"
  )[0];
  topLevelDomain.innerHTML = topLevelDomainParam;

  let currencies = document.getElementsByClassName("ViewCountryCurrencies")[0];
  currencies.innerHTML = currenciesParam;

  let languages = document.getElementsByClassName("ViewCountryLanguages")[0];
  languages.innerHTML = languagesParam;
  for (let i = 0; i < bordersParam.length; i++) {
    createNameCard(bordersParam[i]);
  }
}
function createNameCard(name) {
  let divNode = document.createElement("div");
  let pNode = document.createElement("p");
  let cards = document.getElementsByClassName("nameCards")[0];
  divNode.className = "nameCard";
  pNode.innerHTML = name;
  pNode.className = "nameCardPara";
  divNode.appendChild(pNode);
  cards.appendChild(divNode);
}
function displayTheme(isDarkMode) {
  if (isDarkMode) {
    document.getElementById("HomeBody").style.backgroundColor = "#1b2631";
    let header = document.getElementById("HomeHeader");
    document.getElementById("HomeHeader").style.backgroundColor = "#2e4053";
    document.getElementById("HomeHeaderTitle").style.color = "white";
    document.getElementById("HomeHeaderDarkMode").style.color = "white";
    header.style.backgroundColor = "#2e4053";
    document.getElementsByClassName("ViewCountryName")[0].style.color = "white";
    let keys = document.getElementsByClassName("ViewKey");
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.color = "white";
    }
    document.getElementsByClassName("ViewCountryNativeName")[0].style.color =
      "white";
    document.getElementsByClassName("ViewCountryPopulation")[0].style.color =
      "white";
    document.getElementsByClassName("ViewCountryReigon")[0].style.color =
      "white";
    document.getElementsByClassName("ViewCountrySubReigon")[0].style.color =
      "white";
    document.getElementsByClassName("ViewCountryCapital")[0].style.color =
      "white";
    document.getElementsByClassName(
      "ViewCountryTopLevelDomain"
    )[0].style.color = "white";
    document.getElementsByClassName("ViewCountryCurrencies")[0].style.color =
      "white";
    document.getElementsByClassName("ViewCountryLanguages")[0].style.color =
      "white";
    let nameCards = document.getElementsByClassName("nameCard");
    let bordersName = document.getElementsByClassName("nameCardPara");
    for (let i = 0; i < nameCards.length; i++) {
      nameCards[i].style.backgroundColor = "#2e4053";
      bordersName[i].style.color = "white";
    }
  } else {
    document.getElementById("HomeBody").style.backgroundColor = "#ECEAEA";
    let header = document.getElementById("HomeHeader");
    document.getElementById("HomeHeader").style.backgroundColor = "white";
    document.getElementById("HomeHeaderTitle").style.color = "#000000";
    document.getElementById("HomeHeaderDarkMode").style.color = "#000000";
    header.style.backgroundColor = "white";
    document.getElementsByClassName("ViewCountryName")[0].style.color =
      "#000000";
    let keys = document.getElementsByClassName("ViewKey");
    for (let i = 0; i < keys.length; i++) {
      keys[i].style.color = "#000000";
    }
    document.getElementsByClassName("ViewCountryNativeName")[0].style.color =
      "#000000";
    document.getElementsByClassName("ViewCountryPopulation")[0].style.color =
      "#000000";
    document.getElementsByClassName("ViewCountryReigon")[0].style.color =
      "#000000";
    document.getElementsByClassName("ViewCountrySubReigon")[0].style.color =
      "#000000";
    document.getElementsByClassName("ViewCountryCapital")[0].style.color =
      "#000000";
    document.getElementsByClassName(
      "ViewCountryTopLevelDomain"
    )[0].style.color = "#000000";
    document.getElementsByClassName("ViewCountryCurrencies")[0].style.color =
      "#000000";
    document.getElementsByClassName("ViewCountryLanguages")[0].style.color =
      "#000000";
    let nameCards = document.getElementsByClassName("nameCard");
    let bordersName = document.getElementsByClassName("nameCardPara");
    for (let i = 0; i < nameCards.length; i++) {
      nameCards[i].style.backgroundColor = "white";
      bordersName[i].style.color = "#000000";
    }
  }
}

function changeDarkMode() {
  isDarkMode = !isDarkMode;
  displayTheme(isDarkMode);
}

console.log("Empty commit");
