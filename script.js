function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");

  if (name !== "") {
    greeting.innerHTML = "Hello, " + name;
  } else {
    greeting.innerHTML = "Hello";
  }
}

function changeRed() {
  const box = document.getElementById("redBox");
  box.style.backgroundColor = "red";
  box.style.color = "white";
}

function changeBlue() {
  const box = document.getElementById("blueBox");
  box.style.backgroundColor = "blue";
  box.style.color = "white";
}

function changeGreen() {
  const box = document.getElementById("greenBox");
  box.style.backgroundColor = "green";
  box.style.color = "white";
}

function changeYellow() {
  const box = document.getElementById("yellowBox");
  box.style.backgroundColor = "yellow";
  box.style.color = "white";
}

document.getElementById("redBox").onclick = changeRed;
document.getElementById("blueBox").onclick = changeBlue;
document.getElementById("greenBox").onclick = changeGreen;
document.getElementById("yellowBox").onclick = changeYellow;
