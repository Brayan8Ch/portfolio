// ...existing code...
/**
 * Devuelve la URL del SVG de devicon para una tecnología dada.
 * Extiende este mapa si necesitas más íconos.
 */
function getDeviconSvg(name = '') {
  const key = name.toLowerCase();
  const map = {
    html: 'html5/html5-original.svg',
    css: 'css3/css3-original.svg',
    tailwind: 'tailwindcss/tailwindcss-original.svg',
    javascript: 'javascript/javascript-original.svg',
    js: 'javascript/javascript-original.svg',
    vue: 'vuejs/vuejs-original.svg',
    'vue.js': 'vuejs/vuejs-original.svg',
    react: 'react/react-original.svg',
    'react (básico)': 'react/react-original.svg',
    node: 'nodejs/nodejs-original.svg',
    'node.js': 'nodejs/nodejs-original.svg',
    express: 'express/express-original.svg',
    sql: 'mysql/mysql-original.svg',
    postgresql: 'postgresql/postgresql-original.svg',
    git: 'git/git-original.svg',
    vite: 'vitejs/vitejs-original.svg',
    'vs code': 'vscode/vscode-original.svg',
    vscode: 'vscode/vscode-original.svg',
    postman: 'postman/postman-original.svg',
    figma: 'figma/figma-original.svg'
  };
  const file = map[key];
  if (!file) return '';
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${file}`;
}

export function createTechSection(title = '', items = []) {
  const section = document.createElement('section');
  // Caja parecida a las tarjetas de experiencia
  section.className =
    'p-4 rounded-xl shadow-md transition-colors duration-300 bg-white border border-gray-200 dark:bg-[#0b1220] dark:border-[#21303a]';
  section.setAttribute('aria-label', `${title} technologies`);

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between mb-2';
  header.innerHTML = `
    <h3 class="text-xl font-semibold text-[#1e2937] dark:text-[#ffffff]">${title}</h3>
    <span class="text-sm text-gray-500 dark:text-gray-400">${items.length} items</span>
  `;

  const list = document.createElement('div');
  list.className = 'flex flex-wrap gap-3';

  items.forEach((it) => {
    const chip = document.createElement('span');
    chip.className =
      'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#f3f4f6] text-[#1f2937] dark:bg-[#11202a] dark:text-[#dbeafe] border border-gray-200 dark:border-[#20323a] shadow-sm';
    const svgUrl = getDeviconSvg(it);
    if (svgUrl) {
      const img = document.createElement('img');
      img.src = svgUrl;
      img.className = 'w-6 h-6 mr-2 inline-block';
      img.alt = `${it} icon`;
      img.setAttribute('aria-hidden', 'false');
      img.onerror = function () {
        const altKey = it.toLowerCase().replace(/\s+/g, '');
        if (altKey.includes('tailwind')) {
          this.onerror = null;
          this.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg';
        } else {
          const tryWordmark = svgUrl.replace('.svg', '-wordmark.svg');
          if (tryWordmark !== svgUrl) {
            this.onerror = null;
            this.src = tryWordmark;
          } else {
            this.style.display = 'none';
          }
        }
      };
      chip.appendChild(img);
    }
    const text = document.createElement('span');
    text.textContent = it;
    chip.appendChild(text);
    list.appendChild(chip);
  });

  section.appendChild(header);
  section.appendChild(list);

  // accesibilidad: focus visible
  section.tabIndex = 0;
  section.addEventListener('focus', () => section.classList.add('ring-2', 'ring-[#5b6eae]'));
  section.addEventListener('blur', () => section.classList.remove('ring-2', 'ring-[#5b6eae]'));

  return section;
}

export function renderTechSections(container, sections = []) {
  if (!container) return;
  container.innerHTML = '';
  const wrapper = document.createElement('div');
  // grid responsive (1 columna en móvil, 3 en md)
  wrapper.className = 'grid grid-cols-1 md:grid-cols-3 gap-4';
  sections.forEach((s) => {
    const sec = createTechSection(s.title, s.items || []);
    wrapper.appendChild(sec);
  });
  container.appendChild(wrapper);
}
// ...existing code...