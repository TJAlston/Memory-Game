const handleImgClick = () => {
  console.log('BANANA!!!')
}
let clicked = true
let divClicked = []
let arrayOfClicked = Array(36)

// const handleClickEvent = () => {
//   let div = event.target
//   divClicked.push(div.className)
//   if (clicked) {
//   div.style.backgroundImage =
//   }
// }
const img = "url('bananas.jpg')"
const bgImage = "url('./minion${i + 1}.jpg')"
const bkImage = "url('./images1/minion${i + 1}).jpg)"
// intailizes the entire card function.
const init = () => {
  // loops the cards to turn back and forth between images and 2nd image folder.(2)
  for (let j = 0; j < 2; j++) {
    // loops the cards to turn back and forth within each individual image folder
    for (let i = 0; i < 18; i++) {
      const images = document.querySelector('.images')
      const div = document.createElement('div')
      div.className = `img ${i} hidden`
      div.style.backgroundImage = img
  // addEventListener tells the computer when you hear this "click" do this function
      div.addEventListener('click', () => {
        let pic = event.target
        // console.log('BANANA')
        if (clicked) {
      // if clicked calls the div in order to style the background image to a minion, the ${i + 1} means that it will continue down the numeric image list to complete the grid of pictures.
          div.style.backgroundImage = `url('./images1/minion${i + 1}.jpg')`
          //  if clicked the statement is no longer true and will show a minion
          clicked = false
          divClicked.push(pic.style.backgroundImage)
          console.log(pic.style.backgroundImage)
          console.log(divClicked)
        } else {
          div.style.backgroundImage = "url('bananas.jpg')"
          //  if the not clicked it will remain true.
          clicked = true
        }
      })
      // will take the images and append it to the end of this fomula
      images.appendChild(div)
    }
  }
    var clicks = '0' // counts how may picks have been made in each turn
    var firstchoice // stores index of first card selected
    var secondchoice // stores index of second card selected

    var match = '0' // counts matches made
    var backcard = 'bananas.jpg' // shows back of card when turned over

    function choose (card) {
       if (clicks == 2) {
           return;
       }
       if (clicks == 0) {
           firstchoice = card;
           document.images[card].src = bgImage[card]
           clicks = 1;
       } else {
           clicks = 2;
           secondchoice = card;
           document.images[card].src = bkImage[card]
           timer = setInterval("check()", 1000)
       }
   }
   /* Check to see if a match is made */

function check() {
   clearInterval(timer); //stop timer
   if (bgImage[secondchoice] == bkImage[firstchoice]) {
       match++;
       document.getElementById('matches').innerHTML = match
   } else {
       document.images[firstchoice].src = backcard
       document.images[secondchoice].src = backcard
       clicks = 0
       return
   }
}
}

document.addEventListener('DOMContentLoaded', init)
