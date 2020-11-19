let is_urls = document.querySelectorAll(".is-url");
for (var i = 0; i < is_urls.length; i++) {
  is_urls[i].onclick = function(e){
    location.href = this.getAttribute('data-url');
  };
}