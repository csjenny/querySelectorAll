var numberOfButtons = document.querySelectorAll(".drum").length;

var i = 0;
while (i < numberOfButtons) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
	alert("I get you");
    
});
   i++;
}

 