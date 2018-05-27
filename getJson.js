
$("#btn").click(function() {
  $.getJSON("https://dog.ceo/api/breeds/image/random")
  .done(function(data) {
  	$("#img").attr("src", data.message);
  })
  .fail(function(error) {
  	console.log(error);
  })
})
