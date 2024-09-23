let botonChange = document.querySelector(".change");
let paper = document.querySelector(".codeColor");


paper.innerHTML = "#ffffff";
document.body.style.background = "#ffffff";

botonChange.addEventListener("click", function(){
    paper.innerHTML = generatoHexadecimal();
    document.body.style.background = generatoHexadecimal();
});



function generatoHexadecimal()
{
    let number=0;
    let numberHexadecimal = "";
    for(let i = 1; i <=6; i++)
    {
        number = numberRandom(0,15);

        if(number>=10)
        {
            if(number == 10)
            {
                numberHexadecimal +="a"
            }
            else if(number ==11)
            {
                numberHexadecimal +="b"
            }
            else if(number ==12)
            {
                numberHexadecimal +="c"
            }   
            else if(number ==13)
            {
                numberHexadecimal +="d"
            }
            else if(number ==14)
            {
                numberHexadecimal +="e"
            }
            else if(number ==15)
            {
                numberHexadecimal +="f"
            }
        }
        else
        {
            numberHexadecimal += number.toString();
        }

    }


    return "#"+numberHexadecimal;
}


function numberRandom(min, max)
{
    return Math.floor(Math.random() *(max - min)) + min;
}