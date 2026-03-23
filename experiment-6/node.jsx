document.getElementById("changeheading").addEventListener("click", function() {
  let newText = document.getElementById("input").value;
  document.getElementById("heading").innerText = newText || "WELCOME";
});

const colors = ["lightblue", "red", "black", "green", "yellow", "purple"];
let index = 0;

document.getElementById("background").addEventListener("click", function() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length; // loop back to start
});

const newsize = ["20px", "30px", "50px", "60px", "10px", "15px"];
let index2 = 0;
document.getElementById("changesize").addEventListener("click", function(){
    
    document.getElementById("para").style.fontSize= newsize[index2];
    index2= (index2+ 1) % newsize.length;

});

document.getElementById("showHidePara").addEventListener("click",function(){
    const para= document.getElementById("para");

    if (para.style.display === "none") {
        // If hidden, show it again
        para.style.display = "block";
    } else {
        // If visible, hide it
        para.style.display = "none";
    }


});

document.getElementById("reset").addEventListener("click", function() {
    // Reset heading text
    document.getElementById("heading").innerText = "WELCOME";

    // Reset background color
    document.body.style.backgroundColor = "black";

    // Reset font size of heading and paragraph
    document.getElementById("heading").style.fontSize = "20px";
    document.getElementById("para").style.fontSize = "16px";

    // Reset paragraph text and make sure it's visible
    document.getElementById("para").innerText = "Hi I am Akshay";
    document.getElementById("para").style.display = "block";

    // Clear input field
    document.getElementById("input").value = "";
});
