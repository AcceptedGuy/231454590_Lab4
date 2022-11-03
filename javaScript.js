
/*This function fulfills task 1 by inputting the array and taking 
the difference of the numebrs using two loops*/

var lista = [1, 2, 3, 4, 5, 6, 7, 8];

function diffOfTwo(lista) {

    var first;
    var second;
    var diffnumber = [];
    document.write("The List is : <br>")
    for (var t = 0; t < lista.length; t++) {

        first = lista[t];
        for (var i = t + 1; i < lista.length; i++) {
            second = lista[i];
            if ((first - second == 2) || (second - first == 2)) {

                document.write(t + 1, ": ", first, ", ");
                document.write(second + "<br>");
            }
        }
    }

}

diffOfTwo(lista);
"<br>"

//This is the part for the rectange and triangle area calculation

function areaoftriangle() {
    var val1 = Number(document.getElementById("val1").value);
    var val2 = Number(document.getElementById("val2").value);
    var area = 0.5 * (val1 * val2);
    document.getElementById("T").innerHTML = area;
}
function areaofrectangle() {
    var val1 = Number(document.getElementById("val1").value);
    var val2 = Number(document.getElementById("val2").value);
    var area = (val1 * val2);
    document.getElementById("R").innerHTML = area;
}

"<br>"
//This will implement the bubble sort
var listb = [5, 1, 7, 2, 3, 9, 8, 4];

function bubbleSort(listb) {
    var temp;
    
    document.write("The unsorted array is: ",listb,"<br>");
    for (var i = 0; i < listb.length; i++) {
        for (var t = i + 1; t < listb.length; t++){

            if (listb[i] > listb[t]) {
                temp = listb[i];
                listb[i] = listb[t];
                listb[t] = temp;
            }
        }

    }
    document.write("The unsorted array is: ",listb,"<br>");
}

function sortBubble(){
    bubbleSort(listb);

}

function validationcheck(){

    var customAlert = document.getElementById("customAlert");
    var name = document.getElementById("form_name").value;
    var password = document.getElementById("form_password").value;
    var age = document.getElementById("form_age").value;


    
    if (name.length ==0 || password.length == 0 || age.length ==0){
        customAlert.style.display="block";
    }
    else if(age<0 || age>100)
    {
        alert("YOUR AGE IS WRONG DUDE!");
    }else if(password.length < 8 || password.length <=0)
    {
        alert("YOUR password IS WRONG DUDE!");
    }
}

function confirmation(){
    var customAlert = document.getElementById("customAlert");
    customAlert.style.display="none";

}

function tipcalculator(){
    var totalamount = Number(document.getElementById("tip").value);
    totalamount = 1.16 * totalamount;

    var quality = Number(document.getElementById("quality1").value);
    quality = quality/100;
    var tip = totalamount * quality;

    document.getElementById("CalTip").innerHTML = tip;
}