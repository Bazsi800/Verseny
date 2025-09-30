// ---- óra ----
function frissitOra() {
  const most = new Date();
  document.getElementById('ora').textContent =
    most.toLocaleTimeString('hu-HU');
}
setInterval(frissitOra, 1000);
frissitOra();

// ---- bemutatkozás ----
function toggleBemutato(id) {
  const e = document.getElementById(id);
  e.style.display = e.style.display === "block" ? "none" : "block";
}// ...existing code...

// ---- képgaléria ----
const kepek = [
  {
    src: "../Képek/Extra Képek/Extra_kep1.jpg",
    leiras: "Ez az első extra kép leírása.",
  },
  {
    src: "../Képek/Extra Képek/Extra_kep2.webp",
    leiras: "Ez a második extra kép leírása.",
  },
  {
    src: "../Képek/Extra Képek/Extra_kep3.webp",
    leiras: "Ez a harmadik extra kép leírása.",
  }
];
let index = 0;
function kovetkezoKep() {
  index = (index + 1) % kepek.length;
  const kep = kepek[index];
  document.getElementById('extraKep').src = kep.src;
  document.querySelector('#extraKepLeiras p').textContent = kep.leiras;
}
// Első kép és leírás betöltése oldalinduláskor
window.addEventListener('DOMContentLoaded', () => {
  if (kepek.length > 0) {
    document.getElementById('extraKep').src = kepek[0].src;
    document.querySelector('#extraKepLeiras p').textContent = kepek[0].leiras;
    document.body.style.background = kepek[0].hatterszin;
    index = 0;
  }
});

function toggleBemutato(id) {
    document.getElementById(id).classList.toggle("d-none");
}
