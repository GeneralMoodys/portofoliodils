// turn pages when click button next or previous
const pageTurnBtn = document.querySelectorAll('.nexprev-btn');

pageTurnBtn.forEach((el, index) =>{
    el.onclick = () => {
        const pageTurnBtn = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnBtn);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
        }
        else {
            pageTurn.classList.add('turn');
        }
    }
})