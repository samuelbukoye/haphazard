import { RPSLS } from '../modules/rpsls.js'

$(document).ready(function(){
      $('.modal').modal()
	})

let rpslsPlayer1 = sessionStorage.getItem('rpslsP1')
let rpslsPlayer2 = sessionStorage.getItem('rpslsP2')
let rpslsRepeat = sessionStorage.getItem('rpslsR')

let rpsls = new RPSLS(rpslsPlayer1,rpslsPlayer2)
rpsls.target=parseInt(rpslsRepeat)

rock.addEventListener("click",()=>{rpsls.handleChoice('rock')})
paper.addEventListener("click",()=>{rpsls.handleChoice('paper')})
scissors.addEventListener("click",()=>{rpsls.handleChoice('scissors')})
lizard.addEventListener("click",()=>{rpsls.handleChoice('lizard')})
spock.addEventListener("click",()=>{rpsls.handleChoice('spock')})
