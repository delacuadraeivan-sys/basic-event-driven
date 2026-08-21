const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const messageArea = document.querySelector("#messageArea");

const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");

function displayGreeting() {
    const userName = nameInput.value.trim();
    if (userName === "") {
        messageArea.textContent = "Please enter your name.";
    } else {
        heading.textContent = "Hello, " + userName + "!";
        messageArea.textContent = "The greeting was displayed successfully.";
    }
}

function showTypedText() {
    messageArea.textContent = "You are typing: " + nameInput.value;
}

function changeBackground() {
    const currentColor = document.body.style.backgroundColor;

    if (currentColor === "lightblue") {
        document.body.style.backgroundColor = "#f3f4f6";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }

    messageArea.textContent = "Background color was changed.";
    console.log("Background color changed.");
}

function resetPage() {
    heading.textContent = "Welcome at My Event-Driven Page";
    nameInput.value = "";
    messageArea.textContent = "";
    document.body.style.backgroundColor = "#f3f4f6";
}

function handleMouseover(event) {
    console.log("The mouse is over the " + event.target.textContent.toLowerCase() + " button.");
}

greetingButton.addEventListener("click", displayGreeting);
backgroundButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypedText);

greetingButton.addEventListener("mouseover", handleMouseover);
backgroundButton.addEventListener("mouseover", handleMouseover);
resetButton.addEventListener("mouseover", handleMouseover);

console.log("JavaScript file loaded successfully.");
