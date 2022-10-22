const output = document.querySelector(".output");
const userName = document.querySelector('input[name="userName"]');

const btn = document.querySelector("button");

btn.onclick = () => {
  if (userName.value.length > 1) {
    const message = `Hello ${userName.value} 👋 Welcome to my Portfolio Website`;

    output.textContent = message;
  } else {
    output.textContent = "Please enter more than 1 character";

    userName.style.borderColor = "red";
  }
};

let currentTime2 = new Date().getHours();
if (4 <= currentTime2 && currentTime2 < 12) {
  document.getElementById("greet").innerHTML = "Good Morning";
} else if (12 <= currentTime2 && currentTime2 < 17) {
  document.getElementById("greet").innerHTML = "Good Afternoon";
} else {
  document.getElementById("greet").innerHTML = "Good Evening";
}

const colors = [
  "Green",
  "Red",
  "Cyan",
  "Yellow",
  "Orange",
  "Pink",
  "Purple",
  "Light Blue",
  "Dark Blue",
  "Blue",
];

const btnColor = document.getElementById("Change");

btnColor.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
