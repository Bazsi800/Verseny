function hozzaad() {
  const szoveg = document.getElementById('uj').value.trim();
  if (!szoveg) return;

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = szoveg;
  span.onclick = () => span.classList.toggle('kesz');

  const fel = document.createElement('button');
  fel.textContent = "↑";
  fel.onclick = () => li.previousElementSibling?.before(li);

  const le = document.createElement('button');
  le.textContent = "↓";
  le.onclick = () => li.nextElementSibling?.after(li);

  const torl = document.createElement('button');
  torl.textContent = "X";
  torl.onclick = () => li.remove();

  li.append(span, fel, le, torl);
  document.getElementById('lista').appendChild(li);
  document.getElementById('uj').value = "";
}
