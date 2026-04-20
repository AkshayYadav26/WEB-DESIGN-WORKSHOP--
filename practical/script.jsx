var input = document.getElementById("input");
var btn = document.getElementById("btn");
var tableDiv = document.getElementById("table");

btn.addEventListener("click", () => {
    var n = parseInt(input.value); // get number from input
    if (isNaN(n)) {
        tableDiv.innerHTML = "Please enter a valid number";
        return;
    }

    let result = "";
    for (var i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + (n * i) + "<br>";
    }

    tableDiv.innerHTML = result; // show table inside div
});



// var value=document.getElementById("input");


// document.getElementById( "btn").addEventListener("click", ()=>{

// var n= document.value;


//     for(var i=1; i<=10;i++){
//    document.write( n +" x " +i +" = " + n*i)
// }

    
// })

