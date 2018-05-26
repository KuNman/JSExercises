function countDown(num) {
var intervalId = setInterval(function() {
  if(num != 0) {
  console.log('Timer : ' + num)
  num--;
  } else {
    clearInterval(intervalId);
  	console.log('Ring Ring Ring!!!');
  }
},1000)}

countDown(5);
