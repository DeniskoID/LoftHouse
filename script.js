// ================2var================

document.addEventListener('DOMContentLoaded', () => {
  const onScrollHeader = () => {
    const header = document.querySelector('header');

    let prevScroll = window.pageYOffset;
    let currentScroll;

    window.addEventListener('scroll', () => {
      currentScroll = window.pageYOffset;
      const headerFixed = () => header.classList.contains('fixed-header');

      if (currentScroll > 1) {
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
});
