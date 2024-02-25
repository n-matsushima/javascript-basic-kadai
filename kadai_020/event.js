const changeBtn = document.getElementById('btn');
const changeText = document.getElementById('text');

changeBtn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました';
  });