import {ShowOfHands} from './ShowOfHands.js'

export class RPS extends ShowOfHands{
	constructor(...players){
		super(...players)
		this.playersChoice = ['','']
	}


	rules=(a,b)=>{
		if(a==='rock' && b=='scissors'){
			return ('rock crushes scissors')
		}else if(a==='paper' && b=='rock'){
			return ('paper covers rock')
		}else if(a==='scissors' && b=='paper'){
			return ('scissors cuts paper')
		}
	}
	result=()=>{
		let a=this.playersChoice[0]
		let b=this.playersChoice[1]
		let winner,index,reason

	    if(a===b){
	    	winner = 'Draw...'
	    	index = -1
	    	reason = `${a} has no effect on ${b}`
	    }else if((a==='rock' && b=='scissors')||(a==='paper' && b=='rock')||(a==='scissors' && b=='paper')){
	        winner = `${this.players[0].playerName} wins`
	        index=0
	        reason = this.rules(a,b)
	    }else{
	        winner = `${this.players[1].playerName} wins`
	        index=1
	        reason = this.rules(b,a)
	    }
	    return ([winner,index,reason])
	}

	computerChoice=()=>{
		let random = Math.floor(Math.random()*3+1)
    	switch(random){
	        case 1 : return('rock')
	        case 2 : return('paper')
	        case 3 : return('scissors')
    	}
	}

	

	showchoice=(value)=>{
	    let rock = '<div class="img rock white"><img src="../images/icon-rock.svg" alt="rock"></div>'
	    let paper = '<div class="img paper white"><img src="../images/icon-paper.svg" alt="paper"></div>'
	    let scissors = '<div class="img scissors white"><img src="../images/icon-scissors.svg" alt="scissors"></div>'
	    
	    switch(value){
	        case 'rock' : return rock;
	        case 'paper' : return paper;
	        case 'scissors' : return scissors;
	    }
	}

}
