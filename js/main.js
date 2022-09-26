
// ---------------slider ---------------------

$('.opinion__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [{
         breakpoint: 770,
     settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
     }
    }]
});

// ----------burger menu----------------

$('.burger__menu').click(function () {
  $('.burger__menu,.nav__list').toggleClass('active');
});

// --------------- show scroll arrow------------

let scrollArrow = document.querySelector('.arrow__up');

window.onscroll = () => {
  if (window.scrollY > 400) {
    scrollArrow.classList.remove('show_arrow');
  } else if (window.scrollY < 400) {
    scrollArrow.classList.add('show_arrow');
  }

// ----------------arrow scroll----------
  
  scrollArrow.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

};

// -------------page scroll------------------

$('.nav__list-link').click(function () {
  let scrollName = $(this).attr('data-scroll'),
    scrollElem = $(scrollName),
    scrollTop = scrollElem.offset().top;
  
  $('html, body').animate({
    scrollTop: scrollTop
  }, 1500);
});


// -------------form validate--------

const emailValid = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input.email');
function emailValidate(value) {
  return emailValid.test(value);
}
function updateInput() {
  if (emailValidate(input.value)) input.style.borderColor = 'green';
  else input.style.borderColor = 'red';
}
input.addEventListener('input', updateInput);





// -------------------show img---------------------------------
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('author-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.learnin-img');

for (let elm of elements) {
  observer.observe(elm);
}