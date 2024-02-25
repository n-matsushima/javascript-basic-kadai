const changeBtn = document.getElementById('btn');
const chengeText = document.getElementById('text');


// setTimeout(() => {
//   changeBtn.addEventListener('click', () => {
//     text.textContent = 'ボタンをクリックしました';
//   });
// }, 2000);


changeBtn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});