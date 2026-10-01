(() => {
  const data = window.portfolio;
  const escape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const tags = skills => skills.length ? `<ul class="tags" aria-label="Tools and skills">${skills.map(skill => `<li>${escape(skill)}</li>`).join('')}</ul>` : '';
  const bullets = items => items.length ? `<ul class="highlights">${items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : '';
  const fill = (id, markup) => { document.getElementById(id).innerHTML = markup; };
  const safeLink = value => {
    if (!value) return '';
    try { const url = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(url.protocol) ? escape(value) : ''; } catch { return ''; }
  };
  document.querySelectorAll('[data-name]').forEach(element => { element.textContent = data.name; });
  document.title = `${data.name} | Portfolio`;
  document.getElementById('rotation-intro').textContent = data.rotationIntro;
  document.getElementById('experience-intro').textContent = data.experienceIntro;
  fill('rotation-overview', data.rotations.map((rotation, i) => `<a class="journey-row" href="#rotation-${i + 1}"><span class="number">0${i + 1}</span><span>${escape(rotation.title)}<small>${escape(rotation.team)}</small></span><span class="status">${escape(rotation.status)}</span></a>`).join(''));
  fill('rotation-cards', data.rotations.map((rotation, i) => `<article class="card rotation-card" id="rotation-${i + 1}"><div class="card-top"><span class="number">ROTATION 0${i + 1}</span><span class="status">${escape(rotation.status)}</span></div><p class="date">${escape(rotation.dates)}</p><h3>${escape(rotation.title)}</h3><p class="organization">${escape(rotation.team)}</p><p>${escape(rotation.summary)}</p>${bullets(rotation.highlights)}${tags(rotation.skills)}</article>`).join(''));
  fill('development-cards', data.development.map(item => `<article class="small-card"><p class="eyebrow">${escape(item.type)}</p><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p></article>`).join(''));
  fill('work-cards', data.experience.map(item => `<article class="card work-card"><div><p class="date">${escape(item.dates)}</p><h3>${escape(item.title)}</h3><p class="organization">${escape(item.organization)}</p></div><div><p>${escape(item.description)}</p>${bullets(item.highlights)}${tags(item.skills)}</div></article>`).join(''));
  fill('education-content', `<p class="eyebrow">${escape(data.education.dates)}</p><h3>${escape(data.education.school)}</h3><p class="large-copy">${escape(data.education.degree)}</p><p class="body-copy">${escape(data.education.description)}</p>`);
  fill('project-cards', data.projects.map(item => `<article class="card project-card"><p class="eyebrow">${escape(item.type)}</p><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p>${tags(item.skills)}${safeLink(item.url) ? `<a class="text-link" href="${safeLink(item.url)}" target="_blank" rel="noopener noreferrer">View project ↗</a>` : '<span class="placeholder-note">Project link coming soon</span>'}</article>`).join(''));
  const links = [['GitHub', data.github], ['LinkedIn', data.linkedin], ['Résumé', data.resume]].filter(([, url]) => safeLink(url)).map(([label, url]) => `<a href="${safeLink(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`);
  if (data.email) links.push(`<a href="mailto:${escape(encodeURIComponent(data.email))}">Email ↗</a>`);
  fill('contact-links', links.join(''));

  const experienceAnchors = new Set(['experience', 'work-details', 'education-details', 'project-details']);
  let currentView;
  function syncView() {
    const anchor = location.hash.slice(1);
    const view = experienceAnchors.has(anchor) ? 'experience' : 'rotations';
    document.body.dataset.theme = view;
    document.getElementById('rotations-view').hidden = view !== 'rotations';
    document.getElementById('experience-view').hidden = view !== 'experience';
    document.querySelectorAll('[data-view]').forEach(link => {
      if (link.dataset.view === view) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.querySelector('meta[name="theme-color"]').content = view === 'experience' ? '#192822' : '#f7f5ef';
    const changed = currentView && currentView !== view;
    currentView = view;
    requestAnimationFrame(() => {
      if (anchor === 'experience' || anchor === 'rotations') window.scrollTo(0, 0);
      else if (anchor) document.getElementById(anchor)?.scrollIntoView();
      if (changed) document.getElementById('main').focus({ preventScroll: true });
    });
  }
  window.addEventListener('hashchange', syncView);
  syncView();
})();
