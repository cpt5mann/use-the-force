window.onload=function(){

var peopleResult=document.getElementById("peopleResult");    
var peopleResult2=document.getElementById("peopleResult2");
var peopleResult3=document.getElementById("peopleResult3");
var planres=document.getElementById("planetsResult")
var filmres=document.getElementById("filmsResult")

function reqListener () {
    var data =JSON.parse(this.responseText);
    console.log(data);

peopleResult.innerHTML="Name: " + data.name + " Mass: " + data.mass + " Birth Year: " + data.birth_year + " Gender: " + data.gender;
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.co/api/people/5/");
oReq.send();

function reqListener2(){
  var data2 =JSON.parse(this.responseText);
    console.log(data2);
    peopleResult2.innerHTML="Name: " + data2.name + " Mass: " + data2.mass + " Birth Year: " + data2.birth_year + " Gender: " + data2.gender;
}

var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", reqListener2);
oReq2.open("GET", "https://swapi.co/api/people/4/");
oReq2.send();

function reqListener3(){
  var data3 =JSON.parse(this.responseText);
    console.log(data3);
    peopleResult3.innerHTML="Name: " + data3.name + " Mass: " + data3.mass + " Birth Year: " + data3.birth_year + " Gender: " + data3.gender;
}

var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", reqListener3);
oReq3.open("GET", "https://swapi.co/api/people/1/");
oReq3.send();

 
var oReq4 = new XMLHttpRequest();
oReq4.addEventListener("load", reqListener4);
oReq4.open("GET", "https://swapi.co/api/planets/");
oReq4.send();

function reqListener4(){
var planetData = JSON.parse(this.responseText);
console.log(planetData.results);

 for (var i =0; i<planetData.results.length; i++){
   var newdiv= document.createElement("div");
   newdiv.innerHTML= planetData.results[i].name;
 planres.appendChild(newdiv); 
 console.log("planetData", planetData.results[i].name);
}
}

var oReq5 = new XMLHttpRequest();
oReq5.addEventListener("load", reqListener5);
oReq5.open("GET", "https://swapi.co/api/films/");
oReq5.send();

function reqListener5(){
var movieData = JSON.parse(this.responseText);
console.log(movieData.results);

 for (var i =0; i<movieData.results.length; i++){
  
  var newdiv2b= document.createElement("div");
  var newdiv2= document.createElement("div");
   var newdiv2c= document.createElement("div");
   
   newdiv2b.innerHTML= "Episode " + movieData.results[i].episode_id + ":";
   newdiv2.innerHTML= "Title: " + movieData.results[i].title;
   newdiv2c.innerHTML="Directed By: " + movieData.results[i].director;
 
   filmres.appendChild(newdiv2b);
   filmres.appendChild(newdiv2);
     filmres.appendChild(newdiv2c);

 console.log("movieData", movieData.results[i]);
}

}

};
