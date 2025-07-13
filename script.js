const ramos = [
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
  // Encuentra los ramos que abren este ramo (sus prerrequisitos)
  const prerrequisitos = ramos.filter(r => r.abre.includes(ramo.nombre)).map(r => r.nombre);
  // Verifica que todos estén aprobados
  return prerrequisitos.every(prerreq => estadoRamos[prerreq]?.aprobado);
}

function inicializarEstado() {
  ramos.forEach(ramo => {
    // Se desbloquea si no tiene prerrequisitos o si todos sus prerrequisitos están aprobados
    const prerrequisitos = ramos.filter(r => r.abre.includes(ramo.nombre)).map(r => r.nombre);
    const desbloqueado = prerrequisitos.length === 0;
    estadoRamos[ramo.nombre] = { aprobado: false, desbloqueado };
  });
}

function crearMalla() {
  inicializarEstado();

  const mallaContainer = document.getElementById("malla-container");
  mallaContainer.innerHTML = "";
  const semestres = {};

  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });

  for (const [semestre, ramosSemestre] of Object.entries(semestres)) {
    const col = document.createElement("div");
    col.className = "semestre";
    const title = document.createElement("h2");
    title.textContent = `Semestre ${semestre}`;
    col.appendChild(title);

    ramosSemestre.forEach(ramo => {
      const boton = document.createElement("div");
      boton.className = "ramo locked";
      boton.textContent = ramo.nombre;

      if (estadoRamos[ramo.nombre].desbloqueado) {
        boton.classList.remove("locked");
        boton.classList.add("unlocked");
      }

      if (estadoRamos[ramo.nombre].aprobado) {
        boton.classList.add("approved");
      }

      boton.addEventListener("click", () => {
        if (!estadoRamos[ramo.nombre].desbloqueado || estadoRamos[ramo.nombre].aprobado) return;
        estadoRamos[ramo.nombre].aprobado = true;
        boton.classList.add("approved");

        // Actualiza el desbloqueo de los ramos dependientes
        ramos.forEach(r => {
          if (!estadoRamos[r.nombre].desbloqueado) {
            if (todosPrerrequisitosAprobados(r)) {
              estadoRamos[r.nombre].desbloqueado = true;
            }
          }
        });

        crearMalla();
      });

      col.appendChild(boton);
    });

    mallaContainer.appendChild(col);
  }
}

crearMalla();
