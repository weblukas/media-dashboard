console.log('dziala')
const toggle = document.getElementById('toggle');
const textElementsArray = Array.from(document.querySelectorAll('#dark-font'));
const followersBoxes = Array.from(document.querySelectorAll('.followers__box'))
console.log(followersBoxes)
const cardsArray = Array.from(document.querySelectorAll('.overview__card'))
console.log(cardsArray)



toggle.addEventListener('click',  themeToggle );
    

function themeToggle() {
    document.body.classList.toggle('light-theme');
    textElementsArray.forEach(element => {
                element.classList.toggle('black-font')
            });
    cardsArray.forEach(element => {
        element.classList.toggle('.box-light-theme')
    })
}

themeToggle();





// function themeToggle() {
//     
//     textElementsArray.forEach(element => {
//         element.classList.toggle('black-font')
//     });
//     followersBoxes.forEach(element => {
//         element.classList.toggle('box-light-theme');
//     })

// }

//     themeToggle();

