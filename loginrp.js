var password ="Coonelius69690oo0r3cplay";
var Response;
var entryCount = 0;
var entrylimit=3;
var error=false;


while(Response !=password && !error){
    if(entryCount < entrylimit){Response= window.prompt("Enter Password");
    entryCount++;
    }else {error=true;
    }
}
if(error){
    alert("Too many entries");
}else {alert("You Got it! Keep Password safe or refer to email incase you lose it";
    
}


