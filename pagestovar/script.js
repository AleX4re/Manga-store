const thumbnails = document.querySelectorAll(".image-thumbnails img");
const mainImage = document.querySelector(".main-image img");
function changeImage(element) {
  const newImageSrc = element.getAttribute("src");
  mainImage.setAttribute("src", newImageSrc);
}
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    changeImage(event.target);
  });
});


const stars = document.querySelectorAll('.star-rating__star');
    stars.forEach(star => {
      star.addEventListener('mouseover', e => {
        const rating = e.target.dataset.rating;
        stars.forEach(s => {
          if (parseInt(s.dataset.rating) <= parseInt(rating)) {
            s.classList.add('star-rating__star--active');
          } else {
            s.classList.remove('star-rating__star--active');
          }
        });
      });
      star.addEventListener('click', e => {
        stars.forEach(s => {
          if (parseInt(s.dataset.rating) <= parseInt(rating)) {
            s.classList.add('star-rating__star--active');
          }
        });
      });
    });
