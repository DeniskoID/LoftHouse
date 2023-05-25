document.addEventListener('DOMContentLoaded', () => {
  // ======Fixing header after start scrolling========

  const onScrollHeader = () => {
    const header = document.querySelector('header');
    const mobile = document.getElementById('header-wrapper');

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

  const onClickBurger = () => {
    const header = document.querySelector('header');
    const navBtn = document.querySelector('.nav-icon-btn');
    const navIcon = document.querySelector('.nav-icon');
    const nav = document.querySelector('.bg-wrapper');

    navBtn.addEventListener('click', () => {
      navIcon.classList.toggle('nav-icon--active');
      nav.classList.toggle('bg-wrapper--mobile');
      header.classList.remove('fixed-header');
      header.classList.remove('static-header');
      document.documentElement.classList.toggle('no-scroll');
    });
  };

  onClickBurger();

  // ======Phone-mask========

  const phoneMask = () => {
    mask('[data-tel-input]');

    const phoneInputs = document.querySelectorAll('[data-tel-input]');
    phoneInputs.forEach((input) => {
      input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
      });
      input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
      });
    });
  };

  phoneMask();
});

// ======Yandex map========
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var map = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [59.943543, 30.338928],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
  });

  var myPlacemark = new ymaps.Placemark(
    [59.943543, 30.338928],
    {
      balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
    },
    {
      iconLayout: 'default#image',
      iconImageHref: './images/map/location-pin.svg',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    },
  );

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип

  // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(myPlacemark);
  myPlacemark.balloon.open();
}
