/*=====  hero section blob animation =====*/
const blob = document.getElementById("blob");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.animate({
        left:  `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards"});
};
/*===== Word =====*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector('h1','h3').onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
};

/*===== SHOW SCROLL TOP =====*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 500) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop)

/*===== Loader =====*/
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}