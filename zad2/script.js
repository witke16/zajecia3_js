const numberOnSite = document.getElementById('number')
let number = 0

const buttonIncrementValue = document.getElementById('buttonIncrementValue')
const buttonChangeColor = document.getElementById('buttonChangeColor')


buttonIncrementValue.addEventListener("click", event =>

{
    number=number+1
    numberOnSite.innerText = number
})


buttonChangeColor.addEventListener("click", event => 
 
{
    if ( numberOnSite.style.color == "blue")
    {
        numberOnSite.style.color = "red";
    }
    else
    {
        numberOnSite.style.color = "blue";
    }

})

