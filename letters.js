const hangManLetters = document.querySelectorAll('.letterButton');
hangManLetters.forEach(e => {
    e.addEventListener('click', () => {
        e.classList.add('visibilityHidden')
    })
})
