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


// Function to GET Project Data
const getData = async () => {
    const dataRequestDetails = await fetch('/submit');  
    // https://weather.com/submit

    try{
        // Convert data from dataRequestDetails to JSON
        const dataResponseJson = dataRequestDetails.request.json();
        console.log(dataResponseJson);


        // Update DOM elements
        document.querySelector("#date").innerHTML = new Date().toISOString().slice(0, 10);
        document.querySelector("#temp").innerHTML = dataResponseJson.main.temp;
        document.querySelector("#content").innerHTML = dataResponseJson.main.feel;

    } catch(error) {
        console.log(error);
        // handle whatever the error is...
    }
}



const postData = async (url=" ", data = {}) =>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
    })

    try {
        const responseJsonFromPostRequest = await response.json();
        return responseJsonFromPostRequest;
    } catch(error) {console.log(error);};

}
       

generateBtn.addEventListener("click", async () => {
        // get the zipcode from the zip user input 
        // send to open weather for processing 

        // result = await getWeatherData();
        // // display result from open weather at result div 
        // date.innerText = todaysDate;
        // temp.innerText = result.main.temp + "°F";
        // content.innerText = feelings.value;


        postData('/submit', data={
            response: getWeatherData(),
        })
        getData();
        
    }
)
