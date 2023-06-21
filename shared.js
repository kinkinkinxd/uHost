var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton =document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')

// console.dir(backdrop.style['background-image']);

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open')
}
console.dir(toggleButton)
for (var i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // This will overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

noButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
    closeModal();
})

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open')

})