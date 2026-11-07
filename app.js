const content = window.SITE_CONTENT;
const shell = document.querySelector('#site-shell');
const offline = document.querySelector('#site-offline');

if (!content.siteEnabled) {
  shell.hidden = true; offline.hidden = false;
} else {
  const make = (tag, className, html = '') => { const node = document.createElement(tag); if (className) node.className = className; node.innerHTML = html; return node; };
  const externalAttrs = 'target="_blank" rel="noopener"';
  const titleLink = (item) => item.url ? `<a class="title-link" href="${item.url}" ${externalAttrs}>${item.title}</a>` : item.title;
  document.querySelector('#bio').textContent = content.bio;
  document.querySelector('#bio-detail').textContent = content.bioDetail;
  document.querySelector('#year').textContent = new Date().getFullYear();
  const profiles = document.querySelector('#profile-links');
  content.profiles.forEach((item) => {
    if (!item.url) { profiles.append(make('span', 'profile-link profile-link-pending', `<i data-lucide="${item.icon}"></i><span>${item.label}</span><small>${item.note || 'Coming soon'}</small>`)); return; }
    const a = make('a', 'profile-link', `<i data-lucide="${item.icon}"></i><span>${item.label}</span>`); a.href = item.url; a.target = '_blank'; a.rel = 'noopener'; profiles.append(a);
  });
  const research = document.querySelector('#research-grid');
  content.research.forEach((item) => research.append(make('article', 'research-item', `<div class="research-meta"><span>${item.number}</span><i data-lucide="${item.icon}"></i></div><h3>${item.title}</h3><p>${item.text}</p>`)));
  const pubs = document.querySelector('#publication-list');
  content.publications.forEach((item) => { const statusClass = item.status.toLowerCase().replaceAll(' ', '-'); pubs.append(make('article', 'publication-item', `<time>${item.year}</time><div><div class="pub-top"><span class="status-${statusClass}">${item.status}</span></div><h4>${titleLink(item)}</h4><p>${item.authors}</p><cite>${item.journal}</cite></div>`)); });
  const patents = document.querySelector('#patent-list');
  content.patents.forEach((item) => patents.append(make('article', 'patent-item', `<span>${item.no}</span><div><h4>${titleLink(item)}</h4><p>${item.authors}</p></div>`)));
  document.querySelector('#patent-count').textContent = `${content.patents.length} granted`;
  const renderTimeline = (selector, items) => { const parent = document.querySelector(selector); items.forEach((item) => parent.append(make('article', 'timeline-item', `<time>${item.date}</time><div><h4>${titleLink(item)}</h4><p>${item.place || ''}</p><span>${item.detail}</span></div>`))); };
  renderTimeline('#education-list', content.education); renderTimeline('#conference-list', content.conferences);
  const renderDense = (selector, items) => { const parent = document.querySelector(selector); items.forEach((item) => parent.append(make('article', 'dense-item', `<time>${item.date}</time><div><h4>${titleLink(item)}</h4><p>${item.detail}</p></div>`))); };
  renderDense('#exchange-list', content.exchanges); renderDense('#project-list', content.projects); renderDense('#award-list', content.awards);
  document.querySelector('#exchange-count').textContent = `${content.exchanges.length} entries`; document.querySelector('#project-count').textContent = `${content.projects.length} projects`; document.querySelector('#award-count').textContent = `${content.awards.length} honors`;
  const menuButton = document.querySelector('#menu-toggle'); const nav = document.querySelector('#nav');
  menuButton.addEventListener('click', () => { const open = nav.classList.toggle('open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.setAttribute('aria-label', 'Open menu'); }));
  const themeButton = document.querySelector('#theme-toggle');
  const setThemeIcon = () => { themeButton.innerHTML = `<i data-lucide="${document.documentElement.dataset.theme === 'dark' ? 'moon' : 'sun'}"></i>`; };
  const savedTheme = localStorage.getItem('theme'); if (savedTheme) document.documentElement.dataset.theme = savedTheme; setThemeIcon();
  themeButton.addEventListener('click', () => { document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('theme', document.documentElement.dataset.theme); setThemeIcon(); lucide.createIcons(); });
  const header = document.querySelector('.site-header'); window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 20), { passive: true });
  lucide.createIcons();
}
