export default function map() {
  const contactsMap = document.querySelector("#contacts-map");

  if (contactsMap) {
    function init() {
      const center = JSON.parse(contactsMap.dataset.center);
      const zoom = Number(contactsMap.dataset.zoom);

      const placemark = new ymaps.Placemark(
        center,
        {
          hintContent: "Собственный значок метки",
          iconContent: "Это метка",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "../img/logos/icon-map.svg",
          // Размеры метки.
          iconImageSize: [82, 105],
        }
      );

      const map = new ymaps.Map("contacts-map", {
        center,
        zoom,
      });

      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
      map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

      map.geoObjects.add(placemark);
    }

    ymaps.ready(init);
  }
}
