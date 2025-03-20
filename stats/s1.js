const button = document.getElementById("btn");
button.addEventListener("click", displaystats);
let resultdiv=document.createElement("div")
resultdiv.id="result"
document.getElementById("wrapper").appendChild(resultdiv)

function displaystats() {
  const num = document.getElementById("input");
  var city = num.options[num.selectedIndex].value;
  let population = 0, literacyRate = 0, language =''
  switch(city) {
    case "Bengaluru":
      population = 8443675;
      literacyRate = 88.71;
      language = "Kannada";
      break;
    case "Chennai":
      population = 4646732;
      literacyRate = 90.2;
      language = "Tamil";
      break;
    case "Mumbai":
      population = 12442373;
      literacyRate = 89.73;
      language = "Marathi";
      break;
    case "Delhi":
      population = 16787941;
      literacyRate = 86.2;
      language = "Hindi";
      break;
  }
  let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%.`
  console.log(text)
  document.getElementById("result").innerHTML=text;
}

