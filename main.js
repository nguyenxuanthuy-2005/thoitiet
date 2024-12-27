let search = document.querySelector(".search-box__button");
search.addEventListener("click", function () {
  search.parentElement.classList.toggle("search-box__open");
  search.previousElementSibling.focus();
});
