// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = "0px";
//dodger.style.left = "100px";

//moving dodger to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", ""); //This gives us to identify the distance of dodger from the left corner
    const left = parseInt(leftNumbers, 10); //This change the string into the num

    if (left > 0) { //Because if left is below zero dodger will disappear
        dodger.style.left = `${left - 1}px`; //Every move change 1 px
    }
}

//moving dodger to the right
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", ""); //Identifying location of dodger
    const left = parseInt(leftNumbers, 10); //assigning num

    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});

