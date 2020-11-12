document.querySelector('.header__search').onclick = function(e) {

  let header__search_label = document.querySelector('.header__search-label');

  if (!e.target.matches('.header__search .header__search-label') && getComputedStyle(header__search_label)['position'] == 'fixed') {
    document.querySelector('.overlay').classList.add('overlay_active');
    document.querySelector('.header__search-label').classList.add('header__search-label_active');


    // let nodes = [].slice.call(document.querySelectorAll('.container div'))
    // console.log('my index is', nodes.indexOf(e.target) );
  }
};
document.querySelector('.overlay').onclick = function(e) {
  //if (!e.target.matches('.header__search .header__search-label')) {
    document.querySelector('.overlay').classList.remove('overlay_active');
    document.querySelector('.header__search-label').classList.remove('header__search-label_active');
   // document.querySelector('.header__search-label').classList.add('header__search-label_active');


    // let nodes = [].slice.call(document.querySelectorAll('.container div'))
    // console.log('my index is', nodes.indexOf(e.target) );
  //}
};


// let header__search = document.querySelector('.header__search');
// let header__search_label = document.querySelector('.header__search-label');
// let header__search_label_overlay = document.querySelector('.overlay');
// let header__search_label_position = getComputedStyle(header__search_label)['position'];





// header__search.addEventListener('click', function(e) {

//   if( header__search_label_position == 'fixed' && !header__search_label.classList.contains('header__search-label_active')) {
//     activate_item('overlay');
//     activate_item('header__search-label');


//     if(!header__search_label.classList.contains('.header__search-queries')) {
//       let header__search_queries = document.createElement('ul');
//       header__search_queries.classList.add('header__search-queries');
//       header__search_queries.innerHTML = '<li>loading</li>';
//       header__search_label.appendChild(header__search_queries);
//     }
    
//     if(!header__search_label.classList.contains('.header__search-queries-close')) {
//       let header__search_queries_close = document.createElement('div');
//       header__search_queries_close.classList.add('header__search-queries-close');
//       header__search_queries_close.innerHTML = '<span>закрыть</span>';
//       header__search_label.appendChild(header__search_queries_close);

//       // header__search_queries_close.addEventListener('click', function() {
//       //   deactivate_item('header__search-label');
//       //   deactivate_item('overlay');
//       // });
//     }
    




//     //change_active(['header__search-label','overlay']);
//     // if(!search_label.classList.contains('header__search-label_active')) {
//     //   search_label.classList.add('header__search-label_active');
//     //   overlay.classList.add('overlay_active');
//     // }

//     // let div_queries = document.createElement('div');
//     // div_queries.classList.add('header__search-queries');
//     // div_queries.innerHTML = 'queries';
//     // search_label.appendChild(div_queries);

//     // let span_close = document.createElement('span');
//     // span_close.classList.add('header__search-queries-close');
//     // span_close.innerHTML = 'Закрыть';
//     // search_label.appendChild(span_close);
//     // span_close.addEventListener('click', function() {
//     //   search_label.classList.remove('header__search-label_active');
//     //   overlay.classList.remove('overlay_active');

//     // });

//     // overlay();
//     // search_label.classList.add('header__search-label_active');
//   }
//   // if (e.target.matches('span')) {
//   //   header__search_label.classList.remove('header__search-label_active');
//   // }
  

//     return false;
// });
