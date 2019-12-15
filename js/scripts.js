lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': "Image %1 of %2",
  'wrapAround': true
})

const search = document.querySelector('#search');
const caption = document.querySelectorAll('.img');

const searchBar = event => {
const searchPhotos = event.target.value.toLowerCase();
  
caption.forEach(image => {
const photo = image.getAttribute('data-title').toLowerCase();
const pic = image.parentElement;
    
if(photo.indexOf(searchPhotos) > -1) {
pic.style.display = "flex";
} else {
pic.style.display = "none";  
}
});

};

search.addEventListener('keyup', searchBar);
