// ...existing code...
export function createExperienceCard(exp = {}) {
  const { title = "", company = "", period = "", bullets = [] } = exp;

  const card = document.createElement("article");
  card.className =
    "p-4 rounded-xl shadow-md transition-colors duration-300 bg-white border border-gray-200 dark:bg-[#0b1220] dark:border-[#21303a]";
  card.setAttribute("role", "article");
  card.setAttribute("aria-label", `${title} en ${company}`);

  card.innerHTML = `
    <div class="flex flex-row gap-2 justify-between items-start">
      <div class="flex-1">
        <p class="text-lg font-semibold text-[#1b3d7e] dark:text-[#9fb6ff]">${title}</p>
        <p class="text-sm text-gray-600 dark:text-[#ffffff]">${company}</p>
      </div>
      <p class="text-sm text-gray-500 dark:text-white whitespace-nowrap bg-[#f3f4f6] dark:bg-[#13202a] rounded-lg px-2 py-1">${period}</p>
    </div>
    <ul class="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
      ${bullets.map((b) => `<li>${b}</li>`).join("")}
    </ul>
  `;

  // hover/focus outline for keyboard users
  card.tabIndex = 0;
  card.addEventListener("mouseenter", () =>
    card.classList.add("ring-2", "ring-[#ffffff3d]")
  );
  card.addEventListener("mouseleave", () =>
    card.classList.remove("ring-2", "ring-[#ffffff3d]")
  );

  return card;
}

export function renderExperienceCards(container, data = []) {
  if (!container) return;
  container.innerHTML = ""; // reset
  data.forEach((exp) => {
    const card = createExperienceCard(exp);
    container.appendChild(card);
  });
}


// ...existing code...
export function createTechSection(title = '', items = []) {
  const section = document.createElement('section');
  section.className = 'bg-transparent rounded-xl p-3';
  section.setAttribute('aria-label', `${title} technologies`);

  section.innerHTML = `
    <div class="flex items-center justify-between mb-2">
      <h3 class="text-xl font-semibold text-[#1e2937] dark:text-[#ffffff]">${title}</h3>
      <span class="text-sm text-gray-500 dark:text-gray-400">${items.length} items</span>
    </div>
    <div class="flex flex-wrap gap-3">
      ${items
        .map(
          (it) => `
        <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                     bg-[#f3f4f6] text-[#1f2937] dark:bg-[#11202a] dark:text-[#dbeafe]
                     border border-gray-200 dark:border-[#20323a] shadow-sm">
          ${it}
        </span>`
        )
        .join('')}
    </div>
  `;

  // keyboard focus for section container
  section.tabIndex = 0;
  section.addEventListener('focus', () => section.classList.add('ring-2', 'ring-[#5b6eae]'));
  section.addEventListener('blur', () => section.classList.remove('ring-2', 'ring-[#5b6eae]'));

  return section;
}

export function renderTechSections(container, sections = []) {
  if (!container) return;
  container.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'grid grid-cols-1 md:grid-cols-3 gap-4';
  sections.forEach((s) => {
    const sec = createTechSection(s.title, s.items || []);
    wrapper.appendChild(sec);
  });
  container.appendChild(wrapper);
}