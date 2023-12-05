const input = document.querySelector("#inputId");

input.addEventListener("keydown", (event) => {
  console.log("keydown");

  if (event.key == "Enter") {
    console.dir(event.target);
    console.dir(event);
    console.log(event.key, event.keyCode);
  }
});

input.addEventListener("keyup", (event) => {
  console.log("keyup");

  if (event.key == "Enter") {
    console.dir(event.target);
    console.dir(event);
    console.log(event.key, event.keyCode);
  }
});
