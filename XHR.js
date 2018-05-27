var btn = document.querySelector("#btn");
var span = document.querySelector("#price");

btn.addEventListener("click", function() {

  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var rate = JSON.parse(XHR.responseText).bpi.USD.rate_float;
      span.innerHTML = rate;
    }
  }

  XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
  XHR.send();

})
