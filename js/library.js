import { promptLibrary } from './data/prompt-library.js';
import { copyText, escapeHtml } from './ui.js';

const findPlaceholders = template => [...new Set([...template.matchAll(/{{(.*?)}}/g)].map(match => match[1]))];

export function createPromptLibrary({ search, domain, technique, results, summary, preview, toast }) {
    let selected = null;
    const render = () => {
        const query = search.value.trim().toLowerCase();
        const selectedDomain = domain.value;
        const selectedTechnique = technique.value;
        const filtered = promptLibrary.filter(prompt => {
            const haystack = [prompt.name, prompt.domain, prompt.subdomain, prompt.objective, ...prompt.tags, ...prompt.techniques].join(' ').toLowerCase();
            return (!query || haystack.includes(query)) && (!selectedDomain || prompt.domain === selectedDomain) && (!selectedTechnique || prompt.techniques.includes(selectedTechnique));
        });
        summary.textContent = filtered.length === 1 ? '1 template encontrado' : `${filtered.length} templates encontrados`;
        results.innerHTML = filtered.length ? filtered.map(prompt => `<article class="prompt-library-card"><div class="framework-card-head"><div><span class="section-label">${escapeHtml(prompt.domain)} · ${escapeHtml(prompt.subdomain)}</span><h3>${escapeHtml(prompt.name)}</h3></div><button class="btn btn-secondary library-preview-btn" data-prompt="${prompt.id}" type="button">Preencher</button></div><p>${escapeHtml(prompt.objective)}</p><div class="prompt-tags">${prompt.techniques.concat(prompt.tags).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div></article>`).join('') : '<p class="guide-empty">Nenhum template encontrado com esses filtros.</p>';
        results.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => selectPrompt(button.dataset.prompt)));
    };
    const selectPrompt = id => {
        selected = promptLibrary.find(prompt => prompt.id === id);
        const fields = findPlaceholders(selected.template);
        preview.hidden = false;
        preview.innerHTML = `<div class="framework-card-head"><div><span class="section-label">${escapeHtml(selected.domain)} · ${escapeHtml(selected.subdomain)}</span><h3>${escapeHtml(selected.name)}</h3></div><button class="btn" id="copyLibraryPrompt" type="button">Copiar prompt</button></div><p>${escapeHtml(selected.objective)}</p><div class="library-fields">${fields.map((field, index) => { const id = `library-field-${index}`; return `<label for="${id}">${escapeHtml(field)}</label><input id="${id}" data-placeholder="${escapeHtml(field)}" placeholder="Preencha ${escapeHtml(field.toLowerCase())}">`; }).join('')}</div><pre id="libraryOutput"></pre>`;
        const update = () => {
            let output = selected.template;
            preview.querySelectorAll('[data-placeholder]').forEach(input => { output = output.replaceAll(`{{${input.dataset.placeholder}}}`, input.value || `{{${input.dataset.placeholder}}}`); });
            preview.querySelector('#libraryOutput').textContent = output;
        };
        preview.querySelectorAll('input').forEach(input => input.addEventListener('input', update));
        preview.querySelector('#copyLibraryPrompt').addEventListener('click', () => copyText(preview.querySelector('#libraryOutput').textContent, toast));
        update();
        preview.focus({ preventScroll: true });
        preview.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };
    search.addEventListener('input', render);
    [domain, technique].forEach(control => control.addEventListener('change', render));
    render();
}
