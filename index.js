let heScore = document.getElementById("hescore")
let gtScore = document.getElementById("gtscore")
let homeScore =0
let guestScore = 0
function btnh1() {
    homeScore+= 1
    heScore.textContent = homeScore  
}
function btnh2() {
    homeScore+= 2
    heScore.textContent = homeScore  
}
function btnh3() {
    homeScore+= 3
    heScore.textContent = homeScore  
}

function btng1(){
    
    guestScore+= 1
    gtScore.textContent = guestScore 
    
}
function btng2(){
    
    guestScore+= 2
    gtScore.textContent = guestScore 
    
}
function btng3(){
    
    guestScore+= 3
    gtScore.textContent = guestScore 
    
}