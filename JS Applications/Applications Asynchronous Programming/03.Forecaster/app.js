function attachEvents() {
    document.getElementById("submit").addEventListener("click", showForecast);
}

async function showForecast() {
    const symbols = {
        "Sunny": "&#x2600",
        "Partly sunny": "&#x26C5",
        "Overcast": "&#x2601",
        "Rain": "&#x2614",
        "Degrees": "&#176"
    }
    const currentWeather = document.querySelector("#current .label")
    const upcomingWeather = document.getElementById("upcoming")
    document.getElementById("forecast").style.display = "block";
    upcomingWeather.style.display = "none";
    upcomingWeather.replaceChildren(upcomingWeather.querySelector(".label"));
    currentWeather.textContent = "Loading...";
    document.getElementById("current").replaceChildren(currentWeather);
    const input = document.getElementById("location").value;
    const data = await getData();

    const locationObj = data.find(x => x.name == input);
    let locationCode = undefined;
    if (locationObj) {
        locationCode = locationObj.code;
    }
    const [currentForecast, upcomingForecast] = await Promise.all([
        showCurrentForecast(locationCode),
        showUpcomingForecast(locationCode)
    ])

    currentWeather.textContent = "Current conditions";
    upcomingWeather.style.display = "block";

    const location = e("span",{"class":"forecast-data"});
    location.textContent = currentForecast.name;
    const temp = e("span",{"class":"forecast-data"});
    temp.innerHTML = `${currentForecast.forecast.low}${symbols.Degrees}/${currentForecast.forecast.high}${symbols.Degrees}`;
    const condition = e("span",{"class":"forecast-data"});
    condition.textContent = currentForecast.forecast.condition;
    const stateSpan = e("span",{"class":"condition"},location,temp,condition);
    const symbolSpan = e("span",{"class":"condition symbol"});
    symbolSpan.innerHTML = symbols[currentForecast.forecast.condition];
    const currentDiv = e("div",{"class":"forecasts"},symbolSpan,stateSpan);
    document.querySelector("#current").appendChild(currentDiv);

    const upcomingDiv = e("div",{"class":"forecast-info"});
    upcomingForecast.forecast.forEach(el=>{
        const upcomingSymbol = e("span",{"class":"symbol"});
        upcomingSymbol.innerHTML = symbols[el.condition];
        const upcomingTemp = e("span",{"class":"forecast-data"});
        upcomingTemp.innerHTML = `${el.low}${symbols.Degrees}/${el.high}${symbols.Degrees}`;
        const upcomingCondition = e("span",{"class":"forecast-data"});
        upcomingCondition.textContent = el.condition;
        const upcomingSpan = e("span",{"class":"upcoming"},upcomingSymbol,upcomingTemp,upcomingCondition);
        upcomingDiv.appendChild(upcomingSpan);
    })
    upcomingWeather.appendChild(upcomingDiv);
}

async function getData() {
    const url = "http://localhost:3030/jsonstore/forecaster/locations"
    const res = await fetch(url);
    try {
        if (res.status != 200) {
            throw new Error("No matching data");
        }
        const data = await res.json();

        return data;

    } catch (er) {
        document.getElementById("forecast").style.display = "block";
        document.getElementById("upcoming").style.display = "none";
        document.querySelector("#current .label").textContent = "Error";
    }
}

async function showCurrentForecast(id) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/${id}`
    const res = await fetch(url);
    try {
        if (res.status != 200) {
            throw new Error("No matching data");
        }
        const data = await res.json();

        return data;

    } catch (er) {
        document.getElementById("forecast").style.display = "block";
        document.getElementById("upcoming").style.display = "none";
        document.querySelector("#current .label").textContent = "Error";
    }
}

async function showUpcomingForecast(id) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${id}`
    const res = await fetch(url);

    const data = await res.json();

    return data;
}

function e(tag, atrributesObj, ...children) {
    const element = document.createElement(tag);
    for (const [attribute, value] of Object.entries(atrributesObj)) {
        element.setAttribute(attribute, value)
    }
    for (let el of children) {
        element.appendChild(el);
    }
    return element;
}


attachEvents();