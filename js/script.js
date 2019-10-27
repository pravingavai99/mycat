// Challenge 2: Cat Generator
function generateCat() {
  var catDiv = document.createElement('div');
  catDiv.innerHTML = "<img class='cat-image' src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small'>"
  document.getElementById('catGeneratorDiv').appendChild(catDiv);
}



window.onload = function onPageLoad() {
    //var reloading = sessionStorage.getItem("reloading");
    //if (reloading) {
        // sessionStorage.removeItem("reloading");
        generateCat();
    //}
}

function reloadP() {
    // sessionStorage.setItem("reloading", "true");
    document.location.reload();
}