const section = document.createElement("section");

const h2 = document.createElement("h2");
h2.textContent = "Sección 2";

const p = document.createElement("p");
p.textContent = "Un párrafo...";

// console.log(section, h2, p);

// section.append(h2, p);
section.appendChild(h2);
section.appendChild(p);

console.log(section);

const main = document.getElementsByTagName("main");
main[0].appendChild(section);

section.removeChild(p);

section.remove();
