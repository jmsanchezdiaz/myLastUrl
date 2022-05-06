function main() {
  let i = document.querySelector('.download-url-input');

  function cb(mutationList) {
    mutationList.forEach((mut) => {
      if (mut.attributeName === 'disabled' && mut.target.disabled == false) {
        setTimeout(() => {
          i.value = window.localStorage.getItem('myLastUrl') || i.value;
        }, 500);
      }
    });
  }

  let obs = new MutationObserver(cb);
  obs.observe(i, { attributes: true });

  i.addEventListener('change', (e) => {
    window.localStorage.setItem('myLastUrl', e.target.value);
  });
}

addEventListener('load', () => {
  main();
});
