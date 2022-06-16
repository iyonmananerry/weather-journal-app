let zipCode = document.querySelector("#zip");
const generateBtn = document.querySelector("#generate");
let result = ""
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");
const feelings = document.querySelector("#feelings");
const todaysDate = new Date().toISOString().slice(0, 10)
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
    await fetch(
        '/post_url',
         {
            method: "POST",
            credentials: "same-origin",
            headers: new Headers({
                'content-type': 'applicaton/json',
            }),
            body: JSON.stringify(openweather_data),
        }
        );

    postData_details = await fetch('/get_project_data_details', {method: "GET"});
    
    document.querySelector("#date").innerHTML = postData_details.date;
    document.querySelector("#temp").innerHTML = postData_details.temp;
    document.querySelector("#content").innerHTML = postData_details.feel;

}
)

