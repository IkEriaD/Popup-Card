const popupView = document.querySelectorAll('.popup-view');
const popupBtn = document.querySelectorAll('.popup-btn');
const closeBtn = document.querySelectorAll('.close-btn');

const popup = function(popupClick) {
  popupView[popupClick].classList.add('active');
}

popupBtn.forEach((popupBtn, e) => {
  popupBtn.addEventListener('click', () => {
    popup(e);
  });
});


// closeBtn.forEach((closeBtn) => {
//   closeBtn.addEventListener('click', () => {
//     popupView.forEach((popupView) => {
//       popupView.classList.remove('active');
//     });
//   });
// });