document.addEventListener('DOMContentLoaded', () => {
  // ======Fixing header after start scrolling========

  const onScrollHeader = () => {
    const header = document.querySelector('header');
    const mobile = document.getElementById('header-wrapper');
    console.log(mobile);

    let prevScroll = window.pageYOffset;
    let currentScroll;

    window.addEventListener('scroll', () => {
      currentScroll = window.pageYOffset;
      const headerFixed = () => header.classList.contains('fixed-header');
      const mobileMenu = () => mobile.classList.contains('bg-wrapper--mobile');

      if (currentScroll > 1 && !mobileMenu()) {
        header.classList.add('fixed-header');
        header.classList.remove('static-header');
      } else {
        header.classList.remove('fixed-header');
      }
      if (currentScroll < prevScroll && currentScroll < 100 && headerFixed()) {
        header.classList.add('static-header');
      }

      prevScroll = currentScroll;
    });
  };

  onScrollHeader();

  // ======Mobile menu========
  const header = document.querySelector('header');
  const navBtn = document.querySelector('.nav-icon-btn');
  const navIcon = document.querySelector('.nav-icon');
  const nav = document.querySelector('.bg-wrapper');

  navBtn.addEventListener('click', () => {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('bg-wrapper--mobile');
    header.classList.remove('fixed-header');
    header.classList.remove('static-header');
    document.body.classList.toggle('no-scroll');
  });
});
