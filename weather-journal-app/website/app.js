let zipCode = document.querySelector("#zip");
const generateBtn = document.querySelector("#generate");
const feelings = document.querySelector("#feelings");
const myApi = {
    key: "878ee3568330f958b4861f25389385d8",
    base: "https://api.openweathermap.org/data/2.5/"
}
async function getWeatherData(){
    let response = await fetch(`${myApi.base}weather?zip=${zipCode.value}&units=imperial&appid=${myApi.key}`)
    return response.json();
    
}

generateBtn.addEventListener("click", async () => {
    openweather_data = await getWeatherData();
    weather_data =  {
        'date': new Date().toISOString().slice(0, 10),
        'temperature': openweather_data.main.temp,
        'name': openweather_data.name,
        'feelings': feelings.value,
    }
    await fetch(
        '/post_url',
         {
            method: "POST",
            credentials: "same-origin",
            headers: new Headers({
                'content-type': 'application/json',
            }),
            body: JSON.stringify(weather_data),
        }
        );

    getData = await fetch('/get_project_data_details', {method: "GET"});
    getDataDetails = await getData.json();
    
    document.querySelector("#date").innerHTML = getDataDetails.date;
    document.querySelector("#temp").innerHTML = getDataDetails.temperature;
    document.querySelector("#feelings-content").innerHTML = getDataDetails.feelings;
    document.querySelector("#location").innerHTML = getDataDetails.name;
}
)

