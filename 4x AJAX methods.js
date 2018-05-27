var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var p = document.querySelector("#quote");

var xhr = document.querySelector("#xhr");
var fetch_ = document.querySelector("#fetch");
var jquery = document.querySelector("#jquery");
var axios_ = document.querySelector("#axios");

xhr.addEventListener("click", function() {
 var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4 && XHR.status == 200) {
      var quote = JSON.parse(XHR.responseText);
      p.innerText = quote;
    }
  }

  XHR.open('GET', url);
  XHR.send();
})

fetch_.addEventListener("click", function() {
  fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateP)
  .catch(function(error){
    console.log(error);
  })
})

function handleErrors(response) {
  if(!response.ok) {
    throw Error(response.status);
  }
  return response;
}

function parseJSON(response) {
  return response.json();
}

function updateP(response) {
  p.innerText = response[0];
}


jquery.addEventListener("click", function() {
  $.getJSON(url)
  .done(function(data) {
    updateP(data);
    })
  .fail(function(error) {
    console.log(error);
    })
})

axios_.addEventListener("click", function() {
  axios.get(url)
  .then(function(response) {
    updateP(response.data);
  })
  .catch(handleErrorsAxios);
})

function handleErrorsAxios(error) {
  if(err.response) {
    console.log(err.response.status);
  } else if (err.request) {
    console.log(err.request);
  } else {
    console.log(err.message);
  }
}
