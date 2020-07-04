import { RPS } from '../modules/rps.js'

$(document).ready(function(){
      $('.modal').modal()
})



let rpsPlayer1 = sessionStorage.getItem('rpsP1')
let rpsPlayer2 = sessionStorage.getItem('rpsP2')
let rpsRepeat = sessionStorage.getItem('rpsR')

let rps = new RPS(rpsPlayer1,rpsPlayer2)
rps.target=parseInt(rpsRepeat)






rock.addEventListener("click",()=>{rps.handleChoice('rock')})
paper.addEventListener("click",()=>{rps.handleChoice('paper')})
scissors.addEventListener("click",()=>{rps.handleChoice('scissors')})
