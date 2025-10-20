// ...existing code...
import "./style.css";
import { renderExperienceCards } from "./components/experienceCard.js";
import { renderTechSections } from "./components/techList.js";

// Tema (botones se obtendrán después del DOMContentLoaded)
function toggleTheme(newTheme) {
  const bodyElement = document.body;
  if (newTheme === "dark") {
    bodyElement.classList.add("dark");
    bodyElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    bodyElement.classList.add("light");
    bodyElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    console.log("[main] DOM listo");

    // Botones del tema
    const btnLight = document.getElementById("btnLight");
    const btnDark = document.getElementById("btnDark");
    if (btnDark) btnDark.addEventListener("click", () => toggleTheme("dark"));
    if (btnLight) btnLight.addEventListener("click", () => toggleTheme("light"));

    // Contenedores
    const experienceList = document.getElementById("experience-list");
    const techContainer = document.getElementById("tech-sections");

    if (!experienceList) console.warn("[main] #experience-list no encontrado");
    if (!techContainer) console.warn("[main] #tech-sections no encontrado");

    const experiences = [
      {
        title: "Analista en Retención - UTP",
        company: "Universidad Tecnológica del Perú",
        period: "09/2025 - Actualidad",
        bullets: [
          "Desarrollo de features para optimizar el envío de comuncaciones masivas",
          "Implementación de pruebas A/B para mejorar tasas de apertura",
          "Análisis de datos para segmentación avanzada de usuarios",
        ],
      },
      {
        title: "Practicante Pre Profesional - OSIPTEL",
        company: "Organismo Supervisor de Inversión Privada en Telecomunicaciones",
        period: "04/2025 - 08/2025",
        bullets: [
          "ETL de datos del Sistema de Información de Reportes de Interrupción SISREP",
          "Desarrollo de dashboard con Power BI para visualización nacional",
          "Optimización de consultas SQL para mejorar rendimiento",
        ],
      },
    ];

    const techSections = [
      {
        title: "Frontend",
        items: ["HTML", "Tailwind", "JavaScript", "Vue.js", "React (básico)"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express", "SQL", "PostgreSQL"],
      },
      {
        title: "Herramientas",
        items: ["Git", "Vite", "VS Code", "Postman", "Figma"],
      },
    ];

    if (experienceList && typeof renderExperienceCards === "function") {
      renderExperienceCards(experienceList, experiences);
      console.log("[main] Experiencias renderizadas");
    }

    if (techContainer && typeof renderTechSections === "function") {
      renderTechSections(techContainer, techSections);
      console.log("[main] Tecnologías renderizadas");
    }
  } catch (err) {
    console.error("[main] Error inicializando:", err);
  }
});

const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      const feedback = document.getElementById("contact-feedback");
      const success = document.getElementById("contact-success");
      contactForm.addEventListener("submit", (ev) => {
        ev.preventDefault();
        feedback.classList.add("hidden");
        success.classList.add("hidden");
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();

        if (!name || !email || !message) {
          feedback.textContent = "Por favor completa todos los campos.";
          feedback.classList.remove("hidden");
          return;
        }
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
          feedback.textContent = "Correo electrónico no válido.";
          feedback.classList.remove("hidden");
          return;
        }

        // Simula envío; sustituir por fetch() al endpoint real si es necesario
        console.log("[contact] Datos del formulario:", { name, email, message });
        success.classList.remove("hidden");
        contactForm.reset();
      });
    }
   try {
     console.error("[main] Error inicializando:", error);
   } finally {
     // Código de limpieza o finalización
   }