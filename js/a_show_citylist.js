document.onkeydown = function(e) {
    if (e.key === 'Escape') {
        change_active(['cities', 'overlay', 'cities-container']);
        return false;
    }
};

let select_city = document.querySelector('.select-city');
select_city.addEventListener('click', function() {
    show_citylist();
    return false;
});