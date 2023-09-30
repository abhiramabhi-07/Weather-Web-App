
const apikey="a1070c0e8d605c01a11fe4b34927dd91";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl3="https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button1");
const searchbtn2=document.querySelector(".search button2");
const symbolchange =document.querySelector(".symbol-weather");
const conversionTypeSelect = document.getElementById("conversion-type");



async function weatherfetch(city){  
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    const response2= await fetch(apiurl3 +city+ `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        if(conversionTypeSelect.value == "select"){
            alert('Please Select Unit of temperature');
            location.reload();
        }
        else if(conversionTypeSelect.value == "one"){
        var data =await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        console.log(data);
        if(data.weather[0].main == "Clouds"){
            symbolchange.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            symbolchange.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            symbolchange.src="images/Drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            symbolchange.src="images/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            symbolchange.src="images/clear.png";
        }
        else if(data.weather[0].main == "Snow"){
            symbolchange.src="images/snow.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        }
        else if(conversionTypeSelect.value =="two"){
            var data =await response2.json();
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°F";
            document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
            
            if(data.weather[0].main == "Clouds"){
                symbolchange.src="images/clouds.png";
            }
            else if(data.weather[0].main == "Rain"){
                symbolchange.src="images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                symbolchange.src="images/Drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                symbolchange.src="images/mist.png";
            }
            else if(data.weather[0].main == "Clear"){
                symbolchange.src="images/clear.png";
            }
            else if(data.weather[0].main == "Snow"){
                symbolchange.src="images/snow.png";
            }

            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
        }
    }  
}

function geolocation(){
    if(conversionTypeSelect.value == "select"){
        alert('Please Select Unit of temperature');
        location.reload();
    }
    else if(conversionTypeSelect.value == "one"){
        let x=document.getElementById("geo");
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(current);
        }
        else{
            x.innerHTML="geo is not supported";
        }
    }
    else if(conversionTypeSelect.value == "two"){
        let x=document.getElementById("geo");
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(current2);
        }
        else{
            x.innerHTML="geo is not supported";
        }
    }
}

async function current(data1){
    console.log(data1);
    let lati = data1.coords.latitude;
    let long = data1.coords.longitude;

    const apiurl2="https://api.openweathermap.org/data/2.5/weather?units=metric&";

    const response = await fetch(apiurl2 +`lat=${lati}&lon=${long}`+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        
        if(data.weather[0].main == "Clouds"){
            symbolchange.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            symbolchange.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            symbolchange.src="images/Drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            symbolchange.src="images/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            symbolchange.src="images/clear.png";
        }
        else if(data.weather[0].main == "Snow"){
            symbolchange.src="images/snow.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    } 

}
async function current2(data1){
    console.log(data1);
    let lati = data1.coords.latitude;
    let long = data1.coords.longitude;

    const apiurl4="https://api.openweathermap.org/data/2.5/weather?units=imperial&";

    const response = await fetch(apiurl4 +`lat=${lati}&lon=${long}`+`&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data =await response.json();
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°F";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        
        if(data.weather[0].main == "Clouds"){
            symbolchange.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Rain"){
            symbolchange.src="images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            symbolchange.src="images/Drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            symbolchange.src="images/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            symbolchange.src="images/clear.png";
        }
        else if(data.weather[0].main == "Snow"){
            symbolchange.src="images/snow.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    } 

}

searchbtn.addEventListener("click",()=>{
        weatherfetch(searchbox.value);
})

searchbtn2.addEventListener("click",()=>{
        geolocation();
})
