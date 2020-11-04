function show_citylist() {
    change_active(['cities', 'overlay', 'cities-container']);

    let container = document.querySelector('.cities-container');

    container.innerHTML = '' +
        '<input type="text" class="cities-container__search">' +
        '<ul class="cities-container__content"></ul>' +
        '<button class="cities-container__close">Закрыть</button>';

    let cities_ul = document.querySelector('.cities-container__content');
    cities_ul.innerHTML = '<li class="cities-container__loader">Загрузка городов...</li>';


    get_json('/cities.js', {user: 'Krunal'})
        .then(data => build_citylist(data, cities_ul))      // обрабатываем результат вызова response.json()
        .catch(error => console.error(error))

    let container__search  = document.querySelector('.cities-container__search');
    container__search.addEventListener('keyup', function() {
        let query = container__search.value;
        if(query.length >= 3) {
            get_json('/cities-query.js', {query: query})
                .then(data => build_citylist(data, cities_ul))      // обрабатываем результат вызова response.json()
                .catch(error => console.error(error));
        } else if(query.length === 0) {
            get_json('/cities.js', {user: 'Krunal'})
                .then(data => build_citylist(data, cities_ul))      // обрабатываем результат вызова response.json()
                .catch(error => console.error(error))
        }

    });


    let cities_close = document.querySelector('.cities-container__close');
    cities_close.addEventListener('click', function() {
        change_active(['cities', 'overlay', 'cities-container']);
        return false;
    });
}