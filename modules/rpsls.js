import {ShowOfHands} from './ShowOfHands.js'

export class RPSLS extends ShowOfHands{
	constructor(...players){
		super(...players)
		this.playersChoice = ['','']
	}


	rules=(a,b)=>{
		if(a==='rock' && b=='scissors'){
			return ('rock crushes scissors')
		}else if(a==='rock' && b=='lizard'){
			return ('rock crushes lizard')
		}else if(a==='scissors' && b=='paper'){
			return ('scissors cuts paper')
		}else if(a==='scissors' && b=='lizard'){
			return ('scissors decapitates lizard')
		}else if(a==='paper' && b=='rock'){
			return ('paper covers rock')
		}else if(a==='paper' && b=='spock'){
			return ('paper disproves spock')
		}else if(a==='lizard' && b=='spock'){
			return ('lizard poisons spock')
		}else if(a==='lizard' && b=='paper'){
			return ('lizard eats paper')
		}else if(a==='spock' && b=='scissors'){
			return ('spock smashes scissors')
		}else if(a==='spock' && b=='rock'){
			return ('spock vapourizes rock')
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
	    }else if((a==='rock' && b=='scissors')||(a==='rock' && b=='lizard')||(a==='paper' && b=='rock')||(a==='paper' && b=='spock')||(a==='scissors' && b=='paper')||(a==='scissors' && b=='lizard')||(a==='lizard' && b=='spock')||(a==='lizard' && b=='paper')||(a==='spock' && b=='scissors')||(a==='spock' && b=='rock')){
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
		let random = Math.floor(Math.random()*5+1)
    	switch(random){
	        case 1 : return('rock')
	        case 2 : return('paper')
	        case 3 : return('scissors')
	        case 4 : return('lizard')
	        case 5 : return('spock')
    	}
	}

	

	showchoice=(value)=>{
	    let rock = '<div class="img rock white"><img src="../images/icon-rock.svg" alt="rock"></div>'
	    let paper = '<div class="img paper white"><img src="../images/icon-paper.svg" alt="paper"></div>'
	    let scissors = '<div class="img scissors white"><img src="../images/icon-scissors.svg" alt="scissors"></div>'
	    let lizard = '<div class="img lizard white"><img src="../images/icon-lizard.svg" alt="lizard"></div>'
	    let spock = '<div class="img spock white"><img src="../images/icon-spock.svg" alt="spock"></div>'
	    
	    switch(value){
	        case 'rock' : return rock;
	        case 'paper' : return paper;
	        case 'scissors' : return scissors;
	        case 'lizard' : return lizard
	        case 'spock' : return spock;
	       
	    }
	}

}










