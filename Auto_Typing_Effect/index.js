const wordList = ['Developer','Student','Youtuber']
let span = document.querySelector('span')

let wordIndex=0
let charIndex=0
let deleting=false
setInterval(()=>{
    const word = wordList[wordIndex]
    if(!deleting)
    {
        span.innerText=word.slice(0,charIndex+1)
        charIndex++

        if(charIndex==word.length)
        {
            deleting=true
        }
    }
    else{
        span.innerText=word.slice(0,charIndex-1)
        charIndex--

        if(charIndex==0)
        {
            deleting=false
            wordIndex=(wordIndex+1)%wordList.length
        }
    }
},300)