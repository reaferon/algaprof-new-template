// document.querySelectorAll('.card__variant').addEventListener('click', function() {
//   console.log('sdf');
// });


// document.getElementsByClassName('.card__variant').onclick = function (e) {
//   console.log('222');

// //   console.log(this.getAttribute('data-id'));

// //   // if (e.target.matches('.card__variant_active')) {
// //   //   alert('1');
// //   // } else {
// //   //   alert('2');
// //   // }
  
// //   // console.log('222');
// //   // if(this.classList.contains('card__variant_active') === true) {
// //   //   return false;
// //   // } 
  
  
  
// };

let card__variants = document.querySelectorAll(".card__variant");
for (var i = 0; i < card__variants.length; i++) {
  //this.classList.remove('card__variant_active');
  card__variants[i].onclick = function(e){
    e.target.closest(".card").querySelector(".card__price").innerHTML = this.getAttribute('data-price') + ' руб';
    e.target.closest(".card").querySelector(".card__image").setAttribute('src', this.getAttribute('data-image'));
    e.target.closest(".card").querySelector(".card__add2cart").setAttribute('data-item', this.getAttribute('data-item'));
    
    let all_children_variants = e.target.closest(".card").querySelectorAll(".card__variant");
    for (var ii = 0; ii < all_children_variants.length; ii++) {
      all_children_variants[ii].classList.remove('card__variant_active');
    }
    this.classList.add('card__variant_active');
    
  };
}