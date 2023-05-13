var changingBtn = document.getElementById('changingColorbutton');

var changingDiv = document.getElementById('changingId');

// var hexCodes = document.getElementById("colorHexName")

changingBtn.addEventListener('click', soo)

var colorHex = ['#FF0000' , "#00FFFF" ,"#0000FF", "#00008B","#ADD8E6", '#800080','#FFFF00','#00FF00','#FF00FF','#FFC0CB','#7FFFD4','#808000','#008000','#800000','#A52A2A','#FFA500','#000000','#808080','#C0C0C0','#FFFFFF'];

var colorNames = ['Red', 'Cyan', 'Blue' ,'DarkBlue', 'LightBlue','Purple','Yellow','Lime','Magenta','Pink','Aquamarine','Olive','Green','Maroon','Brown','Orange','Black','Gray','Silver','White'] 

var randomNumber

function colors(){

     randomNumber = Math.floor(Math.random()*colorHex.length );
    // console.log(randomNumber)

    return colorHex[randomNumber]
    

    changingDiv.style.backgroundColor = colors()
}
// console.log(colors())

function soo(){
    changingDiv.style.backgroundColor = colors()
    document.getElementById("colorName").innerHTML = "Color Name : "+ colorNames[randomNumber]

    document.getElementById("colorHexName").innerHTML = "Hex Code : "+ colorHex[randomNumber]

}

 
