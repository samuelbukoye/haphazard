$(document).ready(function(){
    $('.sidenav').sidenav()
    $('.scrollspy').scrollSpy()
});


const handleLoad=_=> {
    let rpsP1 = sessionStorage.getItem('rpsP1')
    let rpsP2 = sessionStorage.getItem('rpsP2')
    let rpsR = sessionStorage.getItem('rpsR')

    // if empty
    if(!rpsR){rpsR=5}
    // if not empty
    if(rpsP1){rpsPlayer1.value=rpsP1}
    // if not empty
    if(rpsP2){rpsPlayer2.value=rpsP2}

    rpsRepeat.value=rpsR

    let rpslsP1 = sessionStorage.getItem('rpslsP1')
    let rpslsP2 = sessionStorage.getItem('rpslsP2')
    let rpslsR = sessionStorage.getItem('rpslsR')

    // if empty
    if(!rpslsR){rpslsR=5}
    // if not empty
    if(rpslsP1){rpslsPlayer1.value=rpslsP1}
    // if not empty
    if(rpslsP2){rpslsPlayer2.value=rpslsP2}

    rpslsRepeat.value=rpslsR
}



const handlePlay=(game)=> {
    if(game==='rps'){
        if(rpsPlayer1.value){
            let rpsP1 = rpsPlayer1.value
            let rpsP2 = rpsPlayer2.value
            //if empty it gives it a value of 'computer'
            if(!rpsP2){rpsP2='Computer'}
            let rpsR = rpsRepeat.value
            sessionStorage.setItem('rpsP1',rpsP1)
            sessionStorage.setItem('rpsP2',rpsP2)
            sessionStorage.setItem('rpsR',rpsR)
            // tekes you to the game
            window.location.assign('rps/rps.html')
        }else{
            rpsPlayer1Label.innerHTML='please fill this in to begin'
        }
    }else if(game==='rpsls'){
        if(rpslsPlayer1.value){

            let rpslsP1 = rpslsPlayer1.value
            let rpslsP2 = rpslsPlayer2.value
            //if empty it gives it a value of 'computer'
            if(!rpslsP2){rpslsP2='Computer'}
            let rpslsR = rpslsRepeat.value
            sessionStorage.setItem('rpslsP1',rpslsP1)
            sessionStorage.setItem('rpslsP2',rpslsP2)
            sessionStorage.setItem('rpslsR',rpslsR)
            // tekes you to the game
            window.location.assign('rpsls/rpsls.html')
        }else{
            rpslsPlayer1Label.innerHTML='please fill this in to begin'
        }
    }
}

handleLoad()








rpsBtn.addEventListener("click",()=>{handlePlay('rps')})
rpslsBtn.addEventListener("click",()=>{handlePlay('rpsls')})
