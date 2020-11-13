function overlay() {
  let overlay = document.querySelector('.overlay');

  if(getComputedStyle(overlay)['opacity'] == '1') {
    document.querySelector('.overlay').classList.remove('overlay_active');
  } else {
    document.querySelector('.overlay').classList.add('overlay_active');
  }

  // if(document.querySelector('.overlay') === null) {
  //   let overlay_on = document.createElement('div');
  //   overlay_on.classList.add('overlay');
  //   overlay_on.classList.add('overlay_active');
  //   document.querySelector('.body').insertBefore(overlay_on, document.querySelector('.modal'));
  // } else {
  //   document.querySelector('.body').removeChild(document.querySelector('.overlay'));
  // }

  document.querySelector('.overlay').onclick = function (e) {
    document.querySelector('.overlay').classList.remove('overlay_active');
    document.querySelector('.header__search-fieldset').classList.remove('header__search-fieldset_active');
    document.querySelector('.navigation__directory').classList.remove('navigation__directory_active');
   // document.querySelector('.body').removeChild(document.querySelector('.overlay'));
  };
}
