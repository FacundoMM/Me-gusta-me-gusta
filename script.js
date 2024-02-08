
var x = document.getElementsByClassName("texto");
var a = 9;
var b = 12;
var c = 9; 
function Likes(y) {
    switch(y){
        case 0:
            a += 1;
            x[y].innerText = a + " likes";
            break
        case 1:
            b += 1;
            x[y].innerText = b + " likes";
            break
        case 2:
            c +=1;
            x[y].innerText = c + " likes";
            break
    }
}