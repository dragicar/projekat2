
function newList() {
    var li = document.createElement("LI");
    var inputValue = document.getElementById("input").value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    if (inputValue === "") {
        alert("Please insert task");
    }
    else {
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("input").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("CLEAR");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }
}

let tasks = document.getElementsByTagName("LI");
var i;
for(i = 0; i < tasks.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("CLEAR");
    span.className = "close";
    span.appendChild(txt);
    content[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if (ev.target.tagName === "LI"){
        ev.target.classList.toggle("checked");
    }
},
false
);


