const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 500,
        left: 50,
        behavior: "smooth"
    })

})