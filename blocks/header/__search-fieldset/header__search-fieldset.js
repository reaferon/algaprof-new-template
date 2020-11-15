document.querySelector('.header__search').onclick = function (e) {
  let header__search_fieldset = document.querySelector('.header__search-fieldset');

  if (
    !e.target.matches('.header__search .header__search-fieldset') && 
    !e.target.matches('.header__search .header__search-input') && 
    getComputedStyle(header__search_fieldset)['position'] == 'fixed'
    ) {
    overlay();
    document.querySelector('.header__search-fieldset').classList.add('header__search-fieldset_active');
    document.querySelector('.header__search-input').focus();
  }
};

