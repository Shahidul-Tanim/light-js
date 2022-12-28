let button = document.querySelector('.darkModeToggler')
let body = document.querySelector('body')
let moonIcon= button.querySelector('.moon')
let heading = document.querySelector('.work h2')
let darkMode = () =>{
    body.classList.toggle('darkMode')

    if(body.classList.contains('darkMode')){
        moonIcon.style.marginTop = `-100%`
        heading.innerHTML = `Dark Mode`
    } else{
        moonIcon.style.marginTop = `0%`
        heading.innerHTML = `Light Mode`
    }
}
button.addEventListener('click' ,darkMode)