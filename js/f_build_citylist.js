function build_citylist(data, container) {
    container.innerHTML = '';
    data.forEach(function (item, i) {
        let li = document.createElement('li');
        li.setAttribute('data-id', item.id);
        li.innerHTML = item.name;
        container.appendChild(li);
    });
}