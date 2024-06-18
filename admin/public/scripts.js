// 인터랙티브한 UI 요소를 위한 JavaScript 코드
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('hover');
  });

  link.addEventListener('mouseleave', () => {
    link.classList.remove('hover');
  });
});
