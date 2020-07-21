let modal = null

const ouvrirModal = function(e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
    modal = target
    modal.addEventListener('click', fermerModal)
    modal.querySelector('.js-close-modal').addEventListener('click', fermerModal )
    modal.querySelector('.js-modal-stop').addEventListener('click', stopPropagation )
}

const fermerModal = function(e) {
    if(modal === null) return
    e.preventDefault()
    modal.style.display = "none"
    modal.setAttribute('aria-hidden', true)
    modal.removeAttribute('aria-modal')
    modal.removeEventListener('click', fermerModal)
    modal.querySelector('.js-close-modal').removeEventListener('click', fermerModal )
    modal.querySelector('.js-modal-stop').removeEventListener('click', stopPropagation )
    modal = null
}

const stopPropagation =function(e){
    e.stopPropagation()
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', ouvrirModal) 
})
window.addEventListener('keydown', function(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        fermerModal(e)
    }
})
