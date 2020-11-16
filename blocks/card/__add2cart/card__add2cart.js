let card__add2carts = document.querySelectorAll(".card__add2cart");

for (var i = 0; i < card__add2carts.length; i++) {
  //this.classList.remove('card__variant_active');
  card__add2carts[i].onclick = async function(e){

    let button = this;
    button.classList.add('card__add2cart_load');

    let query = await fetch('/add2cart.php');
    let response = await query.json();
    if(response.result === 'success') {
      button.classList.remove('card__add2cart_load');


      if(document.getElementsByClassName('navigation__item_target_cart-full').length  <= 0) {
        document.querySelector(".navigation__item_target_cart").classList.add('navigation__item_target_cart-full');
      }

      button.classList.add('card__add2cart_active');
      document.querySelector(".navigation__item_target_cart").style.animation = 'pulse 1.2s ease-in-out 3';
    }
    

    // get_json('/add2cart.php', {item_id: button.getAttribute('data-item')})
    //             .then(data => function(data, button) {
    //               console.log(data);
    //               button.classList.add('card__add2cart_active');
    //             })
    //             .catch(error => console.error(error));

    // e.target.closest(".card").querySelector(".card__price").innerHTML = this.getAttribute('data-price') + ' руб';
    // e.target.closest(".card").querySelector(".card__image").setAttribute('src', this.getAttribute('data-image'));
    // e.target.closest(".card").querySelector(".card__add2cart").setAttribute('data-item', this.getAttribute('data-item'));
    
    // let all_children_variants = e.target.closest(".card").querySelectorAll(".card__variant");
    // for (var ii = 0; ii < all_children_variants.length; ii++) {
    //   all_children_variants[ii].classList.remove('card__variant_active');
    // }
    // this.classList.add('card__variant_active');
    
  };
}