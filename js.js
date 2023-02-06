const mainContainer = document.querySelector(".main-container");
const thanksYouContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thanksYouContainer.classList.remove("hidden")
    mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
    thanksYouContainer.classList.add("hidden")
    mainContainer.style.display = "block";
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})