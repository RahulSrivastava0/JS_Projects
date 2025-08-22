let input = document.querySelector('#sentence')

const lower=document.querySelector('.lower-para')
const upper=document.querySelector('.upper-para')
const camel=document.querySelector('.camel-para')
const pascal=document.querySelector('.pascal-para')
const snake=document.querySelector('.snake-para')
const kebab=document.querySelector('.kebab-para')
const trim=document.querySelector('.trim-para')



function toCamelCase(str)
{   
    if (!str) {
      return "";
    }
    let ans="";
    ans+=(str[0].toLowerCase())
    for(let i=1;i<str.length;i++)
    {
        if(str[i]!==' ')
        {
           if(str[i-1]==' ')
           {
            ans+=(str[i].toUpperCase())
           }
           else{
            ans+=(str[i])
           }
        }
    }
    return ans
}

function toPascalCase(str)
{
    if (!str) {
      return "";
    }
    let ans=""
    ans+=str[0].toUpperCase()
    for(let i=1;i<str.length;i++)
    {
         if(str[i]!==' ')
        {
           if(str[i-1]==' ')
           {
            ans+=(str[i].toUpperCase())
           }
           else{
            ans+=(str[i])
           }
        }
    }
    return ans
}

function toSnakeCase(str)
{
    if (!str) {
      return "";
    }
      let ans = "";
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
          ans+=str[i];
        }
        else{
            ans+="_"
        }
      }
      return ans;
}

function toKebabCase(str) {
    if (!str) {
      return "";
    }
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      ans += str[i];
    } else {
      ans += "-";
    }
  }
  return ans;
}

function toTrimSpaces(str)
{
    if(!str)
    {
        return ""
    }
    let ans=""
    for(let i=0;i<str.length;i++)
    {
        if(str[i]!==" ")
        {
            ans+=str[i]
        }
    }
    return ans.toLowerCase()
}

lower.innerText = input.value.toLowerCase();
upper.innerText = input.value.toUpperCase();
camel.innerText = toCamelCase(input.value);
pascal.innerText = toPascalCase(input.value);
snake.innerText = toSnakeCase(input.value);
kebab.innerText = toKebabCase(input.value);
trim.innerText = toTrimSpaces(input.value);

input.addEventListener('input',(e)=>{
    lower.innerText = input.value.toLowerCase();
    upper.innerText = input.value.toUpperCase();
    camel.innerText = toCamelCase(input.value);
    pascal.innerText = toPascalCase(input.value);
    snake.innerText = toSnakeCase(input.value);
    kebab.innerText = toKebabCase(input.value);
    trim.innerText = toTrimSpaces(input.value);
})