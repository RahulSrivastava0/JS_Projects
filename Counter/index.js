const decrement = document.querySelector('.left')
const increment = document.querySelector('.right')
const reset = document.querySelector('.reset')
const val = document.querySelector('.count')
let input;
let count=0
val.innerText=`${count}`


decrement.addEventListener('click',(e)=>{
    e.preventDefault()
    input = parseInt(document.querySelector("#counter").value);
    if (input == 0) {
      count--;
    }
    else
    {
        count=count-input
    }
    val.innerText=`${count}`
})

increment.addEventListener('click',(e)=>{
    e.preventDefault()
    input = parseInt(document.querySelector("#counter").value);
    if(input == 0)
    {
        count++
    }
    else
    {
        count=input+count
    }
    val.innerText=`${count}`
})

let counter = document.querySelector("#counter");

counter.addEventListener("input", (e) => {
  let val = parseInt(counter.value);
  if (val > 10) {
    counter.value = 10;
  }
  else if(val<0)
  {
    counter.value = 10;
  }
});


reset.addEventListener('click',(e)=>{
    e.preventDefault()
    count=0
    val.innerText=`${count}`
    counter.value=0
})



