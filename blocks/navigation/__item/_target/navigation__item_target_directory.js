document.querySelector('.navigation__item_target_directory').onclick = function (e) {
  if (e.target.matches('.navigation__link')) {
    
    if(document.querySelector('.navigation__directory').classList.contains('navigation__directory_active')) {
      document.querySelector('.navigation__directory').classList.remove('navigation__directory_active');
    } else {
      document.querySelector('.navigation__directory').classList.add('navigation__directory_active');
    }
    overlay();
  }

  // if (e.target.matches('.navigation__link')) {
  //   overlay();
  //  // document.querySelector('.overlay').classList.add('overlay_active');
  //   document.querySelector('.navigation__directory').classList.add('navigation__directory_active');
  // } else {
  //   overlay();
  //   document.querySelector('.navigation__directory').classList.remove('navigation__directory_active');
  // }
};

document.querySelector('.navigation__directory-item_type_header').onclick = function (e) {
  overlay();
  document.querySelector('.navigation__directory').classList.remove('navigation__directory_active');
 // document.querySelector('.body').removeChild(document.querySelector('.overlay'));
};