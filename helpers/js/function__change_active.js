function change_active(selectors=[]) {
  for (i=0; i < selectors.length; i++) {
      let selector = selectors[i];
      let container = document.querySelector('.' + selector);
      if(container.classList.contains(selector + '_active')) {
          container.classList.remove(selector + '_active');
      } else {
          container.classList.add(selector + '_active');
      }
  }
}