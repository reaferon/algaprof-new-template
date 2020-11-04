function build_citylist(data, container) {
    container.innerHTML = '';
    data.forEach(function (item, i) {
        let li = document.createElement('li');
        li.classList.add('cities-container__content_type_any');
        if(item.name === 'Санкт-Петербург' || item.name === 'Москва' || item.name === 'Аксай') {
            li.classList.add('cities-container__content_type_federal');
        }
        li.setAttribute('data-id', item.id);
        li.innerHTML = item.name;
        container.appendChild(li);
    });
}