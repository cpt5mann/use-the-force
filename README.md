# Use the Force

## Objective

Use your knowledge of HTTP requests and XHR to get star wars film information from an API and render to the DOM.

## Prerequisites

* Basic knowledge of HTTP requests.
* Basic understanding of API's.
* Basic understanding of JSON.

## Setup

* Fork Repo
* Clone repo to local machine.
* Link up index.html and app.js

## Your Challenge

Make a `GET` request using XHR to each endpoint. Grab and append the respective values
requested onto the DOM.

#### Make a request to Star Wars API Endpoint

- Create a new XHR object
```js 
var oReq = new XMLHttpRequest();
```
- Declare a function to be used as the event listener.
```js
function reqListener () {
  console.log(this.responseText);
}
```
- Attach the event listener to an event
``` js
oReq.addEventListener("load", reqListener);
```
- Set the destination and send the request!
``` js
oReq.open("GET", "http://www.google.com");
oReq.send();
```
- The code 
```js 
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.com/api");
oReq.send();
```

#### Render the following on the DOM

* People

  * Luke Skywalker
    * Height
    * Mass
    * Birth year
    * Gender
  * Leia (Not LEAH)
    * Height
    * Mass
    * Birth year
    * Gender
  * Darth Vader
    * Height
    * Mass
    * Birth year
    * Gender

* Planets

  * Alderaan
  * Yavin IV
  * Hoth
  * Dagobah
  * Bespin
  * Endor
  * Naboo
  * Coruscant
  * Kamino
  * Geonosis

* Films
  * A New Hope
    * Episode ID
    * Director
  * Attack of the Clones
    * Episode ID
    * Director
  * The Phantom Menace
    * Episode ID
    * Director
  * Revenge of the Sith
    * Episode ID
    * Director
  * Return of the Jedi
    * Episode ID
    * Director
  * The Empire Strikes Back
    * Episode ID
    * Director
  * The Force Awakens
    * Episode ID
    * Director

## Resources

[SWAPI](https://swapi.co/documentation#intro)

[Using XMLHttpRequest - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

[HTML DOM createElement() Method](https://www.w3schools.com/jsreaf/met_document_createelement.asp)

[HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)
