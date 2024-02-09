let inputEle=document.getElementById('location');
let tempEle=document.getElementById('tempValue');
let locEle=document.getElementById('loc');
let weatherDescEle=document.getElementById('status');
let btnEle=document.getElementById('btn');
// let icon=document.getElementById('icon');

const apikey="abb200c5b8ae05f8bc53016035fac154";

btnEle.addEventListener('click',function(){
    if(inputEle.value==""){
        alert("please enter the location");
    }
    else{
        loc=inputEle.value;
        console.log("loc",loc);
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
        fetch(url).then(res=>res.json())//passing a request and return promise object so then catch used and converted into json format and again it returns a promise so use another then
        .then(data=>{
            console.log(data);
            const{name}=data;//object destructuring which is used to extract the name property from data object
            const{feels_like}=data.main;
            const{description}=data.weather[0];
            tempEle.innerHTML=Math.floor(feels_like-273);//data in kelvins so substract
            locEle.innerText=name;//changing location name
            weatherDescEle.innerText=description
        })
        .catch((err)=>{
            console.log(err);
        })
        inputEle.value=""
    }
});