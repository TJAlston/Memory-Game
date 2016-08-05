const handleImgClick = () => {
  console.log('BANANA!!!')
}
let clicked = true

const init = () => {

  for (let i = 0; i < 36; i++){
  const img = `url('bananas.jpg')`
  const images = document.querySelector('.images')
  const div = document.createElement('div')
  div.className = 'img ${i}'
  div.style.backgroundImage = img
  div.addEventListener('click', () => {
    console.log('BANANA')
    if (clicked){
      div.style.backgroundImage = `url('./minion${i + 1}.jpg')`
      clicked = false
    } else {
      div.style.backgroundImage = `url ('bananas.jpg')`
      clicked = true
    }
})
  images.appendChild(div)
}
}
document.addEventListener('DOMContentLoaded', init)


// const init = () => {
//   let cellOne = document.querySelector('td')
//
//   cellOne.addEventListener('click', () => {
//       console.log('BELLO!')
//   })
// }
// //   let cellOne = document.querySelector(".min1")
// //   cellOne.addEventListener('dblclick', () => {
// //     if (firstClick){
// //       cellOne.style.backgroundImage = "url('bananas.jpg')"

//
// // let array = [
// // ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'],
// // ['E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'],
// // ['I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'],
// // ['M', 'M', 'N', 'N', 'O', 'O', 'P', 'P']
// // ]
// // let array = [
// //   ['0', '0', '0', '0', '0', '0', '0', '0',],
// //   ['0', '0', '0', '0', '0', '0', '0', '0',],
// //   ['0', '0', '0', '0', '0', '0', '0', '0',],
// //   ['0', '0', '0', '0', '0', '0', '0', '0',]
// // ]
// // let firstClick = true
// // const cellValues = {0: "url('back3.jpg')"}
// // const init = () =>{
// //
// //   // const moment = require('moment')
// //   // console.log(moment().format());
// //   // moment().format('MMMM Do YYYY, h:mm:ss a');
// //
// //   let cellOne = document.querySelector(".min1")
// //   cellOne.addEventListener('dblclick', () => {
// //     if (firstClick){
// //       cellOne.style.backgroundImage = "url('bananas.jpg')"
// //       firstClick = false
// //     }else{
// //       cellOne.style.backgroundImage = "url('minion1.jpg')"
// //       firstClick = true
// //     }
// //     console.log('Bananas!')
// //   })
// //
// //   let cellTwo = document.querySelector(".min2")
// //   cellTwo.addEventListener('dblclick', () => {
// //     console.log('working')
// //     clicked = false
// //   })
// //
// //   const init = () => {
// //   const rows = document.querySelectorAll('tr')
// //   // loop through the table rows
// //   for (let i = 0; i < rows.length; i++) {
// //     // loop through the table data (cells)
// //     const cols = rows[i].querySelectorAll('td')
// //     for (let j = 0; j < cols.length; j++) {
// //       // establishes that we can click on the table data in the current cell.
// //       cols[j].addEventListener('dblclick', (disable) => {
// //         // draws x or o in each cell and changes the player's turn
// //         play(i, j, playerTurn)
// //         drawBoard()
// //       })
// //     }
// //   }
// // }
// // }
//
// document.addEventListener('DOMContentLoaded', init)
