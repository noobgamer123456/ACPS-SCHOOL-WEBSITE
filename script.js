let index = 0;
const slides = document.getElementsByClassName("myslides");
const dotsContainer = document.querySelector(".dots");

// Create dots dynamically
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.onclick = () => {
    index = i;
    showSlide(index);
  };
  dotsContainer.appendChild(dot);
}

const dots = document.getElementsByClassName("dot");

function showSlide(n) {
  if (n >= slides.length) index = 0;
  if (n < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active-dot");
  }

  slides[index].style.display = "block";
  dots[index].classList.add("active-dot");
}

function changeSlide(n) {
  index += n;
  showSlide(index);
}

// Auto-slide every 4s
setInterval(() => {
  index++;
  showSlide(index);
}, 4000);

window.onload = () => {
  showSlide(index);
};
