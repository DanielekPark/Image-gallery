lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'albumLabel': "Image %1 of %2",
  'wrapAround': true
})


const search = document.querySelector('#search');
const caption = document.querySelectorAll('.img');

const searchBar = event => {
  const searchPhotos = event.target.value.toLowerCase().getAttribute('data-title');
  
  caption.forEach(image => {
    const photo = image.textContent.toLowerCase();
    const pic = image.parentElement;
    
    if(photo.indexOf(searchTerm) > -1) {
      pic.style.display = "block";
    } else {
      pic.style.display = "none";  
    }
  });

};

search.addEventListener('keyup', searchBar);