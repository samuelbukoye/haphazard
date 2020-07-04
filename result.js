let players=sessionStorage.getItem('players')
let findWinner=sessionStorage.getItem('findWinner')
players=JSON.parse(players)
findWinner=JSON.parse(findWinner)



const myAnnouncement=(...findWinner)=>{
	//findWinner[firstPlayer,secondPlayer,firstNo,secondNo]
	if(findWinner[2]===findWinner[3]){
		result.innerHTML='DRAW!!!'
		explanation.innerHTML=`${findWinner[0]} and ${findWinner[1]} both tie with a total of ${findWinner[2]} points`
	}else{
		let difference=findWinner[2]-findWinner[3]
		result.innerHTML=`${findWinner[0].toUpperCase()} WON!!!`
		explanation.innerHTML=`${findWinner[0]} led ${findWinner[1]} with a total of ${difference} points`
	}
}

myAnnouncement(...findWinner)

resultTable=players.reduce((acc,player)=>{
		return(acc+`<tr><td>${player.playerName}</td><td>${player.points}</td></tr>`)
	},'')

table.innerHTML=resultTable




toIndex=_=>{
			window.location.replace('index.html')
	}
toRps=_=>{
			window.location.replace('rps/rps.html')
	}
toRpsls=_=>{
			window.location.replace('rpsls/rpsls.html')
	}

