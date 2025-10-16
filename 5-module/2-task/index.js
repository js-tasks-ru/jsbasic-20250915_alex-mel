function toggleText() {
  const btnHidden = document.querySelector('.toggle-text-button');
  const hiddenText = document.querySelector('#text');
  console.log(btnHidden);
  console.log(hiddenText);
  btnHidden.addEventListener('click', function() {
    if (!hiddenText.hidden) {
      hiddenText.hidden = true;
    } else {
      hiddenText.hidden = false;
    }
  });
}
