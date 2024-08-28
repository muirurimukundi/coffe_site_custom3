// change background header

const scrollHeader = () => {

  const header = document.getElementById('header');

  // When the scroll is greater than 50 viewport innerHeight, add the scroll-header class to the header tag

  this.scrollY >= 50? header.classList.add('scroll-header')
                    : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);
// show scroll up

// scroll sections active link

