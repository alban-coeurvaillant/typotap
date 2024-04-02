const play = document.querySlector('#play');
 
function load(letter){
  fetch(letter+'.svg') // concatenation, je charge a.svg ou b.svg … z.svg 
    .then(function(response){
      if(response.ok){
        response.text().then(function(svg){
          play.insertAdjacentHTML("beforeend", svg);
        });
      }
  });
}
 
document.addEventListener('keyup',function(e){
  load(e.key); // une fonction qui charge 
});
