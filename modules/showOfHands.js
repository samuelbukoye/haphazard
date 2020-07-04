import {Games} from './game.js'


export class ShowOfHands extends Games {

	handlePoints=(value)=>{
		if(value===0){
			this.players[0].points++
		}else if(value===1){
			this.players[1].points++
		}
	}

	handleRest=()=>{
		let result=this.result()
		this.handlePoints(result[1])
		player1.innerHTML=`${this.players[0].playerName} picked`
		player2.innerHTML=`${this.players[1].playerName} picked`
		homePicked.innerHTML=this.showchoice(this.playersChoice[0])
		awayPicked.innerHTML=this.showchoice(this.playersChoice[1])
		winner.innerHTML=result[0]
		reason.innerHTML=result[2]
		home.innerHTML=this.players[0].points
		away.innerHTML=this.players[1].points
		this.playersChoice = ['','']
		this.checkTarget()

		setTimeout(_=>{
		player1.innerHTML=``
		player2.innerHTML=``
				homePicked.innerHTML=`<div class="img white"></div>`
				awayPicked.innerHTML=`<div class="img white"></div>`
			},2000)
	}

	handleChoice=(value)=>{
		if(this.players[1].playerName==='Computer'){
				this.playersChoice[0] = value
			turn.innerHTML=`${this.players[1].playerName}'s turn`
				setTimeout(_=>{
				this.playersChoice[1]=this.computerChoice()
				this.handleRest()
				turn.innerHTML=`${this.players[0].playerName}'s turn`
			},1000)				
		}else{
			if(this.playersChoice[0] ===''){
				this.playersChoice[0] = value
				turn.innerHTML=`${this.players[1].playerName}'s turn`
			}else{
				this.playersChoice[1]= value
				this.handleRest()
				turn.innerHTML=`${this.players[0].playerName}'s turn`
			}
		}	
	}
}