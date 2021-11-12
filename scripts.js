function closeModal() {
    const modalCheckbox = document.querySelector('#modal-checkbox')
    modalCheckbox.checked = false
  }

  const modalAnchors = document.querySelectorAll('.nav-list a')
  for (const modalAnchor of modalAnchors) {
    modalAnchor.addEventListener('click', closeModal)
  }