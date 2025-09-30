function hozzaad() {
    const lista = document.getElementById('lista-aktiv');
    const input = document.getElementById('uj');
    const szoveg = input.value.trim();
    if (!szoveg) return;
    lista.appendChild(createFeladatElem(szoveg, false));
    input.value = "";
    input.focus();
}

function createFeladatElem(szoveg, kesz) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = szoveg;
    span.className = 'todo-text';
    if (kesz) span.classList.add('kesz');

    const checkBtn = document.createElement('button');
    checkBtn.className = "todo-btn check-btn";
    checkBtn.title = kesz ? "Vissza az aktívhoz" : "Kész";
    checkBtn.innerHTML = kesz ? "<-" : "✓";

    checkBtn.onclick = function() {
        if (!kesz) {
            // átrakjuk a Kész listába
            document.getElementById('lista-kesz').appendChild(
                createFeladatElem(szoveg, true)
            );
            li.remove();
        } else {
            // vissza az Aktívhoz
            document.getElementById('lista-aktiv').appendChild(
                createFeladatElem(szoveg, false)
            );
            li.remove();
        }
    };

    if (!kesz) {
        // Csak az aktív listához jöhet fel/le/törlés
        const actions = document.createElement('div');
        actions.className = 'todo-actions';
        // Fel gomb
        const upBtn = document.createElement('button');
        upBtn.innerHTML = "↑";
        upBtn.className = "todo-btn";
        upBtn.title = "Fel";
        upBtn.onclick = function() {
            if (li.previousElementSibling) {
                li.parentNode.insertBefore(li, li.previousElementSibling);
            }
        };
        // Le gomb
        const downBtn = document.createElement('button');
        downBtn.innerHTML = "↓";
        downBtn.className = "todo-btn";
        downBtn.title = "Le";
        downBtn.onclick = function() {
            if (li.nextElementSibling) {
                li.parentNode.insertBefore(li.nextElementSibling, li);
            }
        };
        // Törlés gomb
        const delBtn = document.createElement('button');
        delBtn.innerHTML = "X";
        delBtn.className = "todo-btn";
        delBtn.title = "Törlés";
        delBtn.onclick = function() {
            li.remove();
        };

        actions.appendChild(upBtn);
        actions.appendChild(downBtn);
        actions.appendChild(delBtn);

        li.appendChild(span);
        li.appendChild(actions);
        li.appendChild(checkBtn);

    } else {
        // Csak a vissza gomb kell ide
        li.appendChild(span);
        li.appendChild(checkBtn);
    }

    return li;
}