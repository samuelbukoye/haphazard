export class Games {
	constructor(...players){
		this.players = players.map((player,index)=>{
			return(
				{playerName : player,
				points : 0}
			)
		})
		this.round = 1
		this.target = 5
	}
	
	findWinner=(...players)=>{
		//create an array of players and their points
		let points=players.map(player=>player.points)
		let playerNames=players.map(player=>player.playerName)
		//find the highest no
		let firstNo=Math.max(...points)
		//find its position
		let index=points.indexOf(firstNo)
		//sets the first player
		let firstPlayer=playerNames[index]
		//remove the highest no and its player
		playerNames.splice(index,1)
		points.splice(index,1)
		//finds the highest no
		let secondNo=Math.max(...points)
		//find its position
		index=points.indexOf(secondNo)
		//sets the second player
		let secondPlayer=playerNames[index]
		return ([firstPlayer,secondPlayer,firstNo,secondNo])
	}

	checkTarget=_=>{
		//this checks if the rounds played has reached
		//the amount specified
		if (this.round===this.target){
			let findWinner=this.findWinner(...this.players)
			sessionStorage.setItem('findWinner',JSON.stringify(findWinner))
			sessionStorage.setItem('players',JSON.stringify(this.players))
			
			const changeLocation=_=>{
			//this sets the storage for the result page to use
			window.location.replace('../result.html')
			}
			setTimeout(changeLocation,1000)
		}else{
			this.round++
		}
	}
}
