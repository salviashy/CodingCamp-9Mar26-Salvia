// CLOCK
function updateClock(){
let now = new Date()

document.getElementById("clock").innerText =
now.toLocaleTimeString()

document.getElementById("date").innerText =
now.toDateString()

let hour = now.getHours()
let greet="Good Evening"

if(hour<12) greet="Good Morning"
else if(hour<18) greet="Good Afternoon"

document.getElementById("greeting").innerText=greet
}

setInterval(updateClock,1000)



let time = 1500
let interval = null

function startTimer(){

if(interval !== null) return

interval = setInterval(function(){

let min=Math.floor(time/60)
let sec=time%60

if(min < 10) min = "0" + min
if(sec < 10) sec = "0" + sec

document.getElementById("timer").innerText =
min + ":" + sec

time--

if(time < 0){
clearInterval(interval)
interval = null
}

},1000)

}

function stopTimer(){
clearInterval(interval)
interval = null
}

function resetTimer(){
clearInterval(interval)
interval = null
time = 1500
document.getElementById("timer").innerText = "25:00"
}


// TASK
function addTask(){

let input=document.getElementById("taskInput")

if(input.value==="") return

let li=document.createElement("li")

li.innerHTML=
'<input type="checkbox"> '+
input.value+
' <button onclick="this.parentElement.remove()">Delete</button>'

document.getElementById("taskList").appendChild(li)

input.value=""
}



// LINKS
function addLink(){

let name = document.getElementById("linkName").value
let url = document.getElementById("linkURL").value

if(name === "" || url === "") return

let div = document.createElement("div")

let a = document.createElement("a")
a.href = url
a.innerText = name
a.target = "_blank"

let del = document.createElement("button")
del.innerText = "Delete"

del.onclick = function(){
div.remove()
}

div.appendChild(a)
div.appendChild(del)

document.getElementById("links").appendChild(div)

}