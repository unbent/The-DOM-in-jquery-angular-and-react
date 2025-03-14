window.onload = function() {
    var btnShow = document.getElementById("btnShowNames");
    var btnHide = document.getElementById("btwHideNames");
    var result = document.getElementById("team-member-names");

    btnShow.addEventListener("click", function(){
        var team = document.getElementsByClassName("team-name");
        var names = "";
        
        for (const member of team) {
            names += member.innerHTML + "<br>";
        }
        result.innerHTML = names;
    });

    btnHide.addEventListener("click", function(){
        var team = document.getElementsByClassName("team-name");
        result.innerHTML = "";
    });
}

function effectOn(id){
    var member = document.getElementById(id);
    var memberName = member.nextElementSibling.innerHTML;
    member.classList.add("selected");
    console.clear();
    showName(memberName,"ON");
}

function effectOff(id){
    var member = document.getElementById(id);
    var memberName = member.nextElementSibling.innerHTML;
    member.classList.remove("selected");
    showName(memberName,"OFF");
}

function showName(name,status){
    console.log("Effect: " + status + " for " + name);
}
