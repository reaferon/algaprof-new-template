let directory_link = document.querySelector('.menu-list__link_place_directory');

directory_link.addEventListener('click', function() {
    change_active(['submenu-list']);
    return false;
});

