import { RPSLS } from '../modules/rpsls.js'

$(document).ready(function(){
      $('.modal').modal()
	})

let rpslsPlayer1 = sessionStorage.getItem('rpslsP1')
let rpslsPlayer2 = sessionStorage.getItem('rpslsP2')
let rpslsRepeat = sessionStorage.getItem('rpslsR')

if(!rpslsPlayer1){rpslsPlayer1 = "Player1"}
if(!rpslsPlayer2){rpslsPlayer2 = "Computer"}
if(!rpslsRepeat){rpslsRepeat = "5"}

let rpsls = new RPSLS(rpslsPlayer1,rpslsPlayer2)
rpsls.target=parseInt(rpslsRepeat)

turn.innerHTML=`${rpsls.players[0].playerName}'s turn`

rock.addEventListener("click",()=>{rpsls.handleChoice('rock')})
paper.addEventListener("click",()=>{rpsls.handleChoice('paper')})
scissors.addEventListener("click",()=>{rpsls.handleChoice('scissors')})
lizard.addEventListener("click",()=>{rpsls.handleChoice('lizard')})
spock.addEventListener("click",()=>{rpsls.handleChoice('spock')})
