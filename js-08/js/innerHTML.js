// let section = document.getElementsByTagName("section");
// console.log(section[0].innerText);

let section = document.getElementById("seccion-uno");
// console.log(section.innerText);
// console.log(section.textContent);

// section.innerHTML += "<h2>Algo...</h2>";

// ---

// section.className = "rojo";

// ---

section.classList.add("rojo");
section.classList.remove("rojo");
section.classList.toggle("rojo");
section.classList.contains("rojo");
