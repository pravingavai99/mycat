// Challenge 2: Cat Generator
function generateCat() {
  var catDiv = document.createElement('div');
  catDiv.innerHTML = "<img class='cat-image' src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small'>"
  document.getElementById('catGeneratorDiv').appendChild(catDiv);
}
