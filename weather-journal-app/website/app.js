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
async function getData(){
    let response = await fetch(`${myApi.base}weather?zip=${zipCode.value}&units=imperial&appid=${myApi.key}`)
    return response.json();
    
}


generateBtn.addEventListener("click", async () => {
        // get the zipcode from the zip user input 
        // send to open weather for processing 
        result = await getData();
        // display result from open weather at result div 
        date.innerText = todaysDate;
        temp.innerText = result.main.temp + "°F";
        content.innerText = feelings.value;
        
    })
