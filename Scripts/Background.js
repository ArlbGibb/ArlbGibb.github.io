window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset;
  document.documentElement.style.backgroundPositionY = `${scrollTop * -0.25}px`;
});
