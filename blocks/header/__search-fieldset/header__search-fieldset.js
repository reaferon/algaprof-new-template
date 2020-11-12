document.querySelector('.header__search').onclick = function (e) {

  let header__search_fieldset = document.querySelector('.header__search-fieldset');

  if (!e.target.matches('.header__search .header__search-fieldset') && getComputedStyle(header__search_fieldset)['position'] == 'fixed') {
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.header__search-fieldset').classList.add('header__search-fieldset_active');
    document.querySelector('.header__search-input').focus();
  }
};

document.querySelector('.overlay').onclick = function (e) {
  document.querySelector('.overlay').classList.remove('overlay_active');
  document.querySelector('.header__search-fieldset').classList.remove('header__search-fieldset_active');
};