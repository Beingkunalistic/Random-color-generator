// Use random function. Generate random numbers and multiply them with a number and convert them into hexa decimal numbers because all the color codes are in hexa decimal format.
//declaring a const named RandomNumber which will generate random number.

const getcolor = () => {
    const RandomNumber = Math.floor(Math.random() * 16777215);
    const RandomCode = "#" + RandomNumber.toString(16);
    console.log(RandomNumber, RandomCode);
    document.body.style.backgroundColor = RandomCode;
    document.getElementById("color-code").innerText = RandomCode; 
    navigator.clipboard.writeText(RandomCode);
}


//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

//initial call
getcolor();