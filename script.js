// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('header');

//   window.addEventListener('scroll', () => {
//     if (window.pageYOffset > 400) {
//       header.style.position = 'fixed';
//       header.classList.remove('animate-header-out');
//       header.classList.add('animate-header-in');
//     } else if (window.pageYOffset != 0) {
//       // header.style.position = 'absolute';
//       header.classList.remove('animate-header-in');
//       header.classList.add('animate-header-out');
//     } else {
//       setTimeout(() => {
//         header.style.position = 'absolute';
//         header.classList.remove('animate-header-out');
//       }, 700);
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('header');

//   window.addEventListener('scroll', () => {
//     if (window.pageYOffset < 10) {
//       header.classList.remove('animate-header-out');
//       header.classList.add('animate-header-in');
//     } else if ((window.pageYOffset = 10)) {
//       header.classList.remove('animate-header-in');
//       header.classList.add('animate-header-out');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const onScrollHeader = () => {
    const header = document.querySelector('.header');

    let prevScroll = window.pageYOffset; // узнаем на сколько была прокручена страница ранее
    console.log(prevScroll);
    let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

    window.addEventListener('scroll', () => {
      // при прокрутке страницы

      currentScroll = window.pageYOffset; // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.classList.contains('header_hidden'); // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) {
        // если прокручиваем страницу вниз и header не скрыт
        header.classList.remove('animate-header-in');
        header.classList.add('header_hidden'); // то скрываем header
        header.classList.remove('animate-header-out');
      }
      if (currentScroll < prevScroll && headerHidden()) {
        // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header_hidden'); // то отображаем header
        header.classList.add('animate-header-in'); // то отображаем header
        header.classList.remove('animate-header-out');
      }
      if (currentScroll < 20 && !headerHidden()) {
        // если прокручиваем страницу вверх и header скрыт
        header.classList.remove('header_hidden'); // то отображаем header
        header.classList.add('animate-header-out'); // то отображаем header
      }

      prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
    });
  };

  onScrollHeader(); // вызываем основную функцию onScrollHeader
});

// document.addEventListener('DOMContentLoaded', () => {
//   const onScrollHeader = () => {
//     const header = document.querySelector('.header');

//     let prevScroll = window.pageYOffset; // узнаем на сколько была прокручена страница ранее
//     let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)

//     window.addEventListener('scroll', () => {
//       // при прокрутке страницы

//       currentScroll = window.pageYOffset; // узнаем на сколько прокрутили страницу

//       const headerHidden = () => header.classList.contains('header_hidden'); // узнаем скрыт header или нет

//       if (currentScroll > prevScroll && currentScroll > 300) {
//         // если прокручиваем страницу вниз и header не скрыт
//         header.classList.add('animate-header-in');
//         // header.classList.add('header_hidden');
//         header.classList.remove('animate-header-out');
//       }
//       if (currentScroll < prevScroll && headerHidden()) {
//         // если прокручиваем страницу вверх и header скрыт
//         header.classList.remove('header_hidden'); // то отображаем header
//         header.classList.add('animate-header-in'); // то отображаем header
//         header.classList.remove('animate-header-out');
//       }
//       if (currentScroll < 20 && !headerHidden()) {
//         // если прокручиваем страницу вверх и header скрыт
//         header.classList.remove('header_hidden'); // то отображаем header
//         header.classList.add('animate-header-out'); // то отображаем header
//       }

//       prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
//     });
//   };

//   onScrollHeader(); // вызываем основную функцию onScrollHeader
// });
