function myFunction() {
  let x = document.getElementById("eduList");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const button = document.getElementById("eduBtn");

button.addEventListener("click", function () {
  if (button.innerText === "Show my Skills") {
    button.innerText = "Hide My Skills";
  } else {
    button.innerText = "Show my Skills";
  }
});
