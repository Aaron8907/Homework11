const startBtn = document.getElementById('start');
 
startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/notes'; 
});