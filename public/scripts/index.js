const openModal = document.querySelector('#page-home main a')
const modal = document.querySelector('dialog')
const closeModal = document.querySelector('dialog .header a')

openModal.onclick = function () {
  modal.classList.remove('hide')
}

closeModal.onclick = function () {
  modal.classList.add('hide')
}
