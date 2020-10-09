export default function initModal() {
  const btnAbrir = document.querySelector('[data-modal="abrir"]');
  const btnFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle('ativo');
  }

  function clickForaModal(e) {
    if (e.target === this) {
      toggleModal(e);
    }
  }

  if (btnAbrir && btnFechar && containerModal) {
    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clickForaModal);
  }
}
