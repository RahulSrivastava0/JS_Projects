const body = document.querySelector('body')
const box = document.querySelector('.box')

const pageDark = document.querySelector("#page-dark")
const boxDark = document.querySelector('#container-dark')

pageDark.addEventListener('change',(e)=>{
  if(e.target.checked)
  {
    body.classList.remove('light')
    body.classList.add('dark')
        box.classList.remove("light");
        box.classList.add("dark");
  }
  else{
    body.classList.remove('dark')
    body.classList.add('light')
  }
})

boxDark.addEventListener('change',(e)=>{
  if (e.target.checked) {
    box.classList.remove("light");
    box.classList.add("dark");
  } else {
    box.classList.remove("dark");
    box.classList.add("light");
  }
})
