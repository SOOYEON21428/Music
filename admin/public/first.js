const adminImage = document.querySelector('.admin-image');

adminImage.addEventListener('click', () => {
  adminImage.classList.add('hidden');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
});
