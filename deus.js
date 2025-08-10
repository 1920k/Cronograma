const horasElemento = document.querySelector("#hora");
const diaElemento = document.querySelector("#dia");

function atualizarRelogio() {
    const agora = new Date();
    let h = agora.getHours().toString().padStart(2, '0');
    let m = agora.getMinutes().toString().padStart(2, '0');
    let s = agora.getSeconds().toString().padStart(2, '0');
    if (horasElemento) {
        horasElemento.textContent = `${h}:${m}:${s}`;
    }
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Atualiza imediatamente ao carregar
atualizarRelogio();

function atualizarData() {
    const dia = new Date();
    let sd = dia.getDate().toString().padStart(2, '0');
    let sm = dia.getMonth().toString().padStart(2, '0');
    let sf = dia.getFullYear().toString().padStart(2, '0');
    if (diaElemento) {
        diaElemento.textContent = `${sd}/${sm}/${sf}`;
    }
}

// Atualiza o relógio a cada segundo
setInterval(atualizarData, 1000);

// Atualiza imediatamente ao carregar
atualizarData();


// calendario
      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });
// menu
 function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }
