var num1 = +prompt("Son kriting")
while(isNaN(num1) || num1 == 0) {
    num1 = +prompt("Siz son kritmadingiz")
}
var num2 = +prompt("Soni darajasin kriting")
while(isNaN(num2) || num2 == 0){
    num2 = +prompt("Siz son kritmadingiz")
}

natija = num1
for (let i = 1; i < num2; i++) {
    natija = natija * num1
   
    
}
alert("Siz " + num1 + " soni " + num2 + " darajasin kritdingiz"  + "     Javob " + natija)
