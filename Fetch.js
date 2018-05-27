var url = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener('click', function() {
   fetch(url)
  .then(handleErrors)
  .then(parseJSON)
  .then(updateProfile)
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

function updateProfile(data) {
  fullname.innerText = upperFirst(data.results[0].name.first) + ' ' + upperFirst(data.results[0].name.first);
  avatar.src = data.results[0].picture.medium;
  username.innerText = data.results[0].login.username;
  email.innerText = data.results[0].email;
  city.innerText = upperFirst(data.results[0].location.city);

}

function upperFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}
