const ramos = [
  // (tu lista de ramos aquí, igual que antes)
  { nombre: "Química general I", semestre: 1, abre: ["Química general II", "Laboratorio de química general"] },
  { nombre: "Introducción al álgebra y cálculo", semestre: 1, abre: ["Cálculo diferencial e integral", "Física general"] },
  { nombre: "Orientación Farmacéutica", semestre: 1, abre: ["Fundamentos de ciencias farmacéuticas"] },
  { nombre: "Técnicas de laboratorio químico", semestre: 1, abre: ["Laboratorio de química general", "Biología celular"] },
  { nombre: "Química transformadora", semestre: 2, abre: ["Fundamentos de ciencias farmacéuticas"] },
  { nombre: "Cálculo diferencial e integral", semestre: 2, abre: ["Estadística y análisis de datos"] },
  { nombre: "Física general", semestre: 2, abre: ["Fisicoquímica I", "Fisiología Celular"] },
  { nombre: "Química general II", semestre: 2, abre: ["Química analítica I", "Química orgánica I", "Laboratorio I de química orgánica"] },
  { nombre: "Laboratorio de química general", semestre: 2, abre: ["Química analítica I", "Laboratorio I de química orgánica"] },
  { nombre: "Biología celular", semestre: 2, abre: ["Fisiología celular"] },
  { nombre: "Química orgánica I", semestre: 3, abre: ["Química orgánica II"] },
  { nombre: "Química analítica I", semestre: 3, abre: ["Laboratorio de análisis químico", "Química analítica II"] },
  { nombre: "Laboratorio I de química orgánica", semestre: 3, abre: [] },
  { nombre: "Estadística y análisis de datos", semestre: 3, abre: ["Estadística farmacéutica", "Laboratorio de análisis químico", "Práctica intermedia"] },
  { nombre: "Fundamentos de ciencias farmacéuticas", semestre: 3, abre: ["Práctica intermedia"] },
  { nombre: "Fisiología Celular", semestre: 3, abre: ["Fisiología de sistemas"] },
  { nombre: "Química orgánica II", semestre: 4, abre: ["Botánica y Farmacognosia", "Química de Heterocíclicos y análisis espectroscópico", "Bioquímica"] },
  { nombre: "Laboratorio de análisis químico", semestre: 4, abre: ["Laboratorio de análisis instrumental", "Farmacología general"] },
  { nombre: "Química analítica II", semestre: 4, abre: ["Botánica y Farmacognosia", "Laboratorio de análisis instrumental"] },
  { nombre: "Fisicoquímica I", semestre: 4, abre: ["Fisicoquímica farmacéutica"] },
  { nombre: "Fisiología de sistemas", semestre: 4, abre: ["Farmacología de sistemas I", "Farmacología general"] },
  { nombre: "Práctica intermedia", semestre: 4, abre: ["Legislación farmacéutica"] },
  { nombre: "Inglés IV", semestre: 4, abre: [] },
  { nombre: "Laboratorio de análisis instrumental", semestre: 5, abre: ["Bromatología", "Análisis de medicamentos, doping y drogas de abuso"] },
  { nombre: "Botánica y Farmacognosia", semestre: 5, abre: [] },
  { nombre: "Química de Heterocíclicos y análisis espectroscópico", semestre: 5, abre: ["Farmacoquímica I"] },
  { nombre: "Bioquímica", semestre: 5, abre: ["Microbiología", "Farmacología de sistemas I"] },
  { nombre: "Farmacología general", semestre: 5, abre: ["Biofarmacia y farmacocinética", "Farmacoquímica I", "Farmacología de sistemas I"] },
  { nombre: "Gestión de Calidad", semestre: 5, abre: ["Legislación farmacéutica"] },
  { nombre: "Inglés V", semestre: 5, abre: [] },
  { nombre: "Microbiología", semestre: 6, abre: ["Farmacología de sistemas II"] },
  { nombre: "Farmacoquímica I", semestre: 6, abre: ["Farmacoquímica II"] },
  { nombre: "Farmacología de sistemas I", semestre: 6, abre: ["Farmacología de sistemas II"] },
  { nombre: "Fisiopatología molecular", semestre: 6, abre: ["Fisiopatología y semiología"] },
  { nombre: "Legislación farmacéutica", semestre: 6, abre: ["Salud pública", "Tecnología farmacéutica I"] },
  { nombre: "Fisicoquímica farmacéutica", semestre: 6, abre: ["Operaciones unitarias para qyf", "Tecnología farmacéutica I"] },
  { nombre: "Fisiopatología y semiología", semestre: 7, abre: ["Nutrición clínica", "Bioquímica clínica"] },
  { nombre: "Farmacoquímica II", semestre: 7, abre: ["Análisis de medicamentos, doping y drogas de abuso"] },
  { nombre: "Farmacología de sistemas II", semestre: 7, abre: ["Farmacología clínica", "Toxicología"] },
  { nombre: "Salud pública", semestre: 7, abre: ["Farmacia asistencial", "Estadística farmacéutica", "Economía en salud y marketing farmacéutico"] },
  { nombre: "Tecnología farmacéutica I", semestre: 7, abre: ["Tecnología farmacéutica II", "Administración y gestión farmacéutica", "Biofarmacia y farmacocinética"] },
  { nombre: "Operaciones unitarias para qyf", semestre: 7, abre: ["Tecnología farmacéutica II"] },
  { nombre: "Análisis de medicamentos, doping y drogas de abuso", semestre: 8, abre: [] },
  { nombre: "Nutrición clínica", semestre: 8, abre: ["Bromatología"] },
  { nombre: "Bioquímica clínica", semestre: 8, abre: ["Toxicología", "Farmacología clínica"] },
  { nombre: "Biofarmacia y farmacocinética", semestre: 8, abre: ["Farmacología clínica"] },
  { nombre: "Tecnología farmacéutica II", semestre: 8, abre: ["Tecnología cosmética"] },
  { nombre: "Administración y gestión farmacéutica", semestre: 8, abre: ["Farmacia asistencial"] },
  { nombre: "Estadística farmacéutica", semestre: 8, abre: ["Innovación y proyectos"] },
  { nombre: "Farmacología clínica", semestre: 9, abre: ["Farmacia clínica", "Práctica profesional en farmacia comunitaria", "Economía en salud y marketing farmacéutico"] },
  { nombre: "Bromatología", semestre: 9, abre: [] },
  { nombre: "Toxicología", semestre: 9, abre: ["Práctica profesional en farmacia comunitaria"] },
  { nombre: "Farmacia asistencial", semestre: 9, abre: [] },
  { nombre: "Tecnología cosmética", semestre: 9, abre: [] },
  { nombre: "Electivo especializado", semestre: 9, abre: [] },
  { nombre: "Farmacia clínica", semestre: 10, abre: ["Actividad final de titulación"] },
  { nombre: "Práctica profesional en farmacia comunitaria", semestre: 10, abre: ["Actividad final de titulación"] },
  { nombre: "Biotecnología farmacéutica", semestre: 10, abre: ["Actividad final de titulación"] },
  { nombre: "Economía en salud y marketing farmacéutico", semestre: 10, abre: ["Actividad final de titulación"] },
  { nombre: "Innovación y proyectos", semestre: 10, abre: ["Actividad final de titulación"] },
  { nombre: "Electivos especializados", semestre: 10, abre: ["Actividad final de titulación"] },
  { nombre: "Actividad final de titulación", semestre: 11, abre: [] }
];

const estadoRamos = {};

function todosPrerrequisitosAprobados(ramo) {
  const prerrequisitos = ramos.filter(r => r.abre.includes(ramo.nombre)).map(r => r.nombre);
  return prerrequisitos.every(nombre => estadoRamos[nombre]?.aprobado);
}

function inicializarEstado() {
  ramos.forEach(ramo => {
    const prerrequisitos = ramos.filter(r => r.abre.includes(ramo.nombre)).map(r => r.nombre);
    const desbloqueado = prerrequisitos.length === 0;
    estadoRamos[ramo.nombre] = {
      aprobado: false,
      desbloqueado: desbloqueado
    };
  });
}

function actualizarUIDesbloqueados() {
  ramos.forEach(ramo => {
    if (!estadoRamos[ramo.nombre].desbloqueado && todosPrerrequisitosAprobados(ramo)) {
      estadoRamos[ramo.nombre].desbloqueado = true;
      const boton = document.querySelector(`.ramo[data-nombre="${ramo.nombre}"]`);
      if (boton) {
        boton.classList.remove("locked");
        boton.classList.add("unlocked");
        boton.style.cursor = "pointer";
      }
    }
  });
}

function crearMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  const semestres = {};
  ramos.forEach(r => {
    if (!semestres[r.semestre]) semestres[r.semestre] = [];
    semestres[r.semestre].push(r);
  });

  Object.keys(semestres).sort((a, b) => a - b).forEach(sem => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    columna.appendChild(titulo);

    semestres[sem].forEach(ramo => {
      const boton = document.createElement("div");
      boton.className = "ramo locked";
      boton.textContent = ramo.nombre;
      boton.setAttribute("data-nombre", ramo.nombre);

      const estado = estadoRamos[ramo.nombre];
      if (estado.desbloqueado) {
        boton.classList.remove("locked");
        boton.classList.add("unlocked");
        boton.style.cursor = "pointer";
      }

      if (estado.aprobado) {
        boton.classList.add("approved");
      }

      boton.addEventListener("click", () => {
        if (!estadoRamos[ramo.nombre].desbloqueado || estadoRamos[ramo.nombre].aprobado) return;

        estadoRamos[ramo.nombre].aprobado = true;
        boton.classList.add("approved");
        actualizarUIDesbloqueados();
      });

      columna.appendChild(boton);
    });

    contenedor.appendChild(columna);
  });
}

inicializarEstado();
crearMalla();
