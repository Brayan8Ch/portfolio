import "./style.css";

// Selección de los botones por ID (coincide con `index.html`)
const btnLight = document.getElementById("btnLight");
const btnDark = document.getElementById("btnDark");

// Función para activar el tema claro
function toggleTheme(newTheme) {
    const bodyElement = document.body;
    
    if (newTheme === 'dark') {
        // Al cambiar a 'dark':
        bodyElement.classList.add('dark');
        bodyElement.classList.remove('light'); // Asegura que 'light' se quite
        localStorage.setItem('theme', 'dark');
    } else {
        // Al cambiar a 'light':
        bodyElement.classList.add('light');    // Añade la clase 'light'
        bodyElement.classList.remove('dark');   // Asegura que 'dark' se quite
        localStorage.setItem('theme', 'light');
    }
}

// Ejemplo de cómo manejar los clics:
if (btnDark) { // Botón para cambiar a Oscuro
    btnDark.addEventListener("click", () => toggleTheme('dark'));
}

if (btnLight) { // Botón para cambiar a Claro
    btnLight.addEventListener("click", () => toggleTheme('light'));
}

