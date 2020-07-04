import { RPS } from '../modules/rps.js'

$(document).ready(function(){
      $('.modal').modal()
})

let rpsPlayer1 = sessionStorage.getItem('rpsP1')
let rpsPlayer2 = sessionStorage.getItem('rpsP2')
let rpsRepeat = sessionStorage.getItem('rpsR')

if(!rpsPlayer1){rpsPlayer1 = "Player1"}
if(!rpsPlayer2){rpsPlayer2 = "Computer"}
if(!rpsRepeat){rpsRepeat = "5"}

let rps = new RPS(rpsPlayer1,rpsPlayer2)
rps.target=parseInt(rpsRepeat)

turn.innerHTML=`${rps.players[0].playerName}'s turn`

rock.addEventListener("click",()=>{rps.handleChoice('rock')})
paper.addEventListener("click",()=>{rps.handleChoice('paper')})
scissors.addEventListener("click",()=>{rps.handleChoice('scissors')})
