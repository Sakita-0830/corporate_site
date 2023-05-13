// drawer-menu
const target = document.getElementById("menu");
target.addEventListener("click", () => {
  const target = document.getElementById("menu");
  target.classList.toggle("open");
  const nav = document.getElementById("nav");
  nav.classList.toggle("in");
});

// スクロールトップ
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
scrollTop('button');

//modal
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('modal');
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
})
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content-inner') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});