mapfallback = document.querySelector(".contacts__map-fallback-link");

document.addEventListener("DOMContentLoaded", function () {
  if (!mapfallback.classList.contains("contacts__map-fallback-link--hidden")) {
    mapfallback.classList.add("contacts__map-fallback-link--hidden");
  }
});

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 16,
    controls: ['smallMapDefaultSet'],
  });

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8, офис 101',
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [66, 100],
    iconImageOffset: [-35, -110]
  });

  myMap.geoObjects
    .add(myPlacemark);
});