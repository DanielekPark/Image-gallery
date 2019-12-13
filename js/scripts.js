lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': "Image %1 of %2",
  'wrapAround': true
})



function search() {
  let input = document.getElementByTagName("input");
  input.value = input.value.toLowerCase();
}

function searchBar() {
  let attribute = document.getElementsByTagName("img").getAttribute("data-title"); 
  for (let i=0; attribute.length; i++){
    document.getElementById("search")[0].innerHTML = attribute.toLowerCase();   
  }
}

document.getElementsByTagName("input").addEventListener("keyup", search);

document.getElementById("myDIV").style.display = "none"; 

if(){


}