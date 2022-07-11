/* DESCRIPTION: CUSTOM JS FILE */

/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS

document.querySelector('#title').innerText = localStorage.getItem('books')
document.querySelector('#store').src = localStorage.getItem('pic')
document.querySelector('#info',).innerText = localStorage.getItem('para')
document.querySelector('.author').innerText = localStorage.getItem('auth')
document.querySelector('.genre').innerText = localStorage.getItem('ISBN')
document.querySelector('.rank').innerText = localStorage.getItem('ranking')

window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
	let intViewportWidth = window.innerWidth;
	if (
		document.body.scrollTop > 30 ||
		(document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (
		document.body.scrollTop < 30 ||
		(document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
	) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// NAVBAR ON MOBILE
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// HOVER ON DESKTOP
function toggleDropdown(e) {
    const _d = e.target.closest(".dropdown");
    let _m = document.querySelector(".dropdown-menu", _d);

    setTimeout(
        function () {
        const shouldOpen = _d.matches(":hover");
        _m.classList.toggle("show", shouldOpen);
        _d.classList.toggle("show", shouldOpen);

        _d.setAttribute("aria-expanded", shouldOpen);
        },
        e.type === "mouseleave" ? 300 : 0
    );
}

// ON HOVER
const dropdownCheck = document.querySelector(".dropdown");

if (dropdownCheck !== null) {
    document
        .querySelector(".dropdown")
        .addEventListener("mouseleave", toggleDropdown);
    document
        .querySelector(".dropdown")
        .addEventListener("mouseover", toggleDropdown);

    // ON CLICK
    document.querySelector(".dropdown").addEventListener("click", (e) => {
        const _d = e.target.closest(".dropdown");
        let _m = document.querySelector(".dropdown-menu", _d);
        if (_d.classList.contains("show")) {
            _m.classList.remove("show");
            _d.classList.remove("show");
        } else {
            _m.classList.add("show");
            _d.classList.add("show");
        }
    });
}

/* CARD SLIDER - SWIPER */
var cardSlider = new Swiper(".card-slider", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 70,
    breakpoints: {
        // when window is <= 767px
        767: {
        slidesPerView: 1,
        },
        // when window is <= 991px
        991: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
    },
});

/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, // whether animation should happen only once - while scrolling down
});


// STARTING OUR FETCH FROM HERE

document.querySelector('#search-btn').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  

  const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=ynGyPZGQkeGIypWGrrxs7TfckZOz1xAl `

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.results)
        //local storage for title
        if(!localStorage.getItem('hooks')){
            localStorage.setItem('books',  data.results.books[`${choice - 1 }`].title)

          }else{
           let hooks = localStorage.getItem('books') + " ;" + data.results.books[`${choice - 1 }`].title
           localStorage.setItem('books', hooks)
          }
       //local storage for image
          if(!localStorage.getItem('tics')){
            localStorage.setItem('pic',  data.results.books[`${choice - 1 }`].book_image)

          }else{
           let tics = localStorage.getItem('pic') + " ;" + data.results.books[`${choice - 1 }`].book_image
           localStorage.setItem('pic', tics)
          }
       
       //local storage for para
       if(!localStorage.getItem('infr')){
        localStorage.setItem('para',  data.results.books[`${choice - 1 }`].description)

      }else{
       let infr = localStorage.getItem('para') + " ;" + data.results.books[`${choice - 1 }`].description
       localStorage.setItem('para', infr)
      }

      //local storage for author

      if(!localStorage.getItem('director')){
        localStorage.setItem('auth',  data.results.books[`${choice - 1 }`].author)

      }else{
       let director = localStorage.getItem('auth') + " ;" + data.results.books[`${choice - 1 }`].author
       localStorage.setItem('auth', director)
      }

      //local storage for ISBN

      if(!localStorage.getItem('num')){
        localStorage.setItem('ISBN',  data.results.books[`${choice - 1 }`].isbn13)

      }else{
       let num = localStorage.getItem('ISBN') + " ;" + data.results.books[`${choice - 1 }`].isbn13
       localStorage.setItem('ISBN', num)
      }

      //local storage for rank

      if(!localStorage.getItem('place')){
        localStorage.setItem('ranking',  data.results.books[`${choice - 1 }`].rank)

      }else{
       let place = localStorage.getItem('ranking') + " ;" + data.results.books[`${choice - 1 }`].rank
       localStorage.setItem('ranking', place)
      }




        document.querySelector('#store').src = data.results.books[`${choice - 1}`].book_image
        document.querySelector('.title').innerText = data.results.books[`${choice - 1 }`].title
        document.querySelector('.info',).innerText = data.results.books[`${choice - 1 }`].description
        document.querySelector('.author').innerText = ` Author : ${data.results.books[`${choice - 1}`].author}`
        document.querySelector('.genre').innerText = ` ISBN : ${data.results.books[`${choice - 1 }`].isbns[0].isbn13}`
        document.querySelector('.rank').innerText = ` NY Best Sellers Rank : ${data.results.books[`${choice - 1}`].rank}`

        // let books = localStorage.getItem('books') + " ; " + data.results.books[`${choice - 1 }`].title
        // localStorage.setItem('books', books)
        // document.querySelector('#title').innerText = localStorage.getItem('books')
      })
      
      .catch(err => {
          console.log(`error ${err}`)
      });
}
      
