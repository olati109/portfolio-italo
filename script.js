//efeito do parallax

window.addEventListener('scroll', function () {
  var header = this.document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

document.addEventListener('mousemove', parallax);
function parallax(e) {
  this.querySelectorAll('.sobre-por').forEach((layer) => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

//Scroll Suave para Link Interno

const menuItems = document.querySelectorAll('.nav-list a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: 'smooth',
  });
}
