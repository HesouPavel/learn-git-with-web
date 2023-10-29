function modeChange(req) {
    if(req == light){
        document.getElementById("dark").style.display= "block";
        document.getElementById("light").style.display= "none";
        document.getElementById("text").style.color= "black";
        document.getElementById("end").style.color= "black";
        document.getElementById("body").style.backgroundColor= "white";            
    } else {
        document.getElementById("light").style.display= "block";
        document.getElementById("dark").style.display= "none";
        document.getElementById("text").style.color= "#008888";
        document.getElementById("end").style.color= "#88a";
        document.getElementById("body").style.backgroundColor= "#223";            
    }
}