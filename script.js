//your JS code here. If required.
let counter = document.getElementById("counter")
let btn = document.getElementById("btn")

let count = 0
btn.addEventListner("click",()=>{
count++
counter.textContent = count;


	
})