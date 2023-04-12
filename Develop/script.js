var Link = 'https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js';




// document.addEventListener('DOMContentLoaded', function(){
//   fetch(Link)
//   .then(response => response.json())
//   .then(data => JSON.stringify(data))
//   .then(info => console.log(info))
// });
document.addEventListener('DOMContentLoaded', function(){
  fetch(Link)
  .then(function(response) {
    return response.json();
  })
  .then (function(data){
    console.log(data);
  })
});