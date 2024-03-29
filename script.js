// Vairables
const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);

// Open Popup
function openPopup(e) {
    e.preventDefault();
    // console.log(input.value)
    modal.style.display = "block";
    startCountdown();
}

// Close Popup
function closePopup(e) {
    // e.preventDefault();
    // console.log(input.value)
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}

// Counter Function
let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startCountdown() {
    let downloadTimer = setInterval(() => {
        progressBar.value = 10 - (--reverseCounter);
        if(reverseCounter <= 0) {
            clearInterval(downloadTimer);
            closePopup();
            window.open(input.value, "_blank");
        }
        counting.innerHTML = reverseCounter;
    }, 1000);
    let reverseCounter = 10;
}