const checkbox = document.querySelector('#checkbox');
// console.log(window.matchMedia('(prefers-color-scheme: dark)').media);

// document.body.style.setProperty('--gray', 'blue');
checkbox.addEventListener('change', function (e) {
  //   console.log(this.checked);
  if (this.checked) {
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
  } else {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
});
