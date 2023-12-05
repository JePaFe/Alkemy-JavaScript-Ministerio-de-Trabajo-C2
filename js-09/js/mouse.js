const h1 = document.querySelector("h1");

h1.addEventListener("mouseenter", () => {
  console.log("mouseenter");
});

h1.addEventListener("mouseleave", () => {
  console.log("mouseleave");
});

// h1.addEventListener("mousemove", (event) => {
//   console.log("mousemove");
//   console.dir(event.target);
// });

h1.addEventListener("click", (event) => {
  console.log("click");
});

h1.addEventListener("mousedown", (event) => {
  console.log("mousedown");
});

h1.addEventListener("mouseup", (event) => {
  console.log("mouseup");
});
