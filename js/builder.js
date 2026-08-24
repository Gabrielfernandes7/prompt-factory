import { frameworks } from './data/frameworks.js';
import { composePrompt } from './prompt.js';
import { escapeHtml } from './ui.js';

export function createBuilder({ select, form, info, preview, guide, search, level, toast }) {
    const drafts = new Map();
    let activeFramework = Object.keys(frameworks)[0];

    const readFields = () => Object.fromEntries(
        [...form.querySelectorAll('textarea')].map(field => [field.dataset.label, field.value])
    );
    const rememberDraft = () => drafts.set(activeFramework, readFields());

    function updatePreview() {
        const content = composePrompt(form);
        preview.innerHTML = content
            ? escapeHtml(content)
            : '<span class="preview-empty-title">Seu prompt aparecerá aqui.</span><span>Escolha um framework e preencha os campos ao lado.</span>';
    }

    function renderForm() {
        const framework = frameworks[activeFramework];
        const values = drafts.get(activeFramework) || {};
        select.value = activeFramework;
        info.innerHTML = `<p><strong>O que é:</strong> ${escapeHtml(framework.what)}</p><p><strong>Quando usar:</strong> ${escapeHtml(framework.when)}</p><p><strong>Mais adequado para:</strong> ${escapeHtml(framework.best)}</p>`;
        form.innerHTML = framework.fields.map(([name, help, placeholder], index) => `
            <div class="field field-enter">
                <label for="f${index}">${escapeHtml(name)}</label>
                <span class="help">${escapeHtml(help)}</span>
                <textarea id="f${index}" data-label="${escapeHtml(name)}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(values[name] || '')}</textarea>
            </div>`).join('');
        form.querySelectorAll('textarea').forEach(field => field.addEventListener('input', () => {
            drafts.set(activeFramework, readFields());
            updatePreview();
        }));
        updatePreview();
    }

    function renderGuide() {
        const query = search.value.trim().toLowerCase();
        const selectedLevel = level.value;
        const entries = Object.entries(frameworks)
            .filter(([key]) => key !== 'free')
            .filter(([, framework]) => (selectedLevel === 'all' || framework.level === selectedLevel)
                && `${framework.name} ${framework.what} ${framework.when} ${framework.best} ${framework.category}`.toLowerCase().includes(query));
        guide.innerHTML = entries.length ? entries.map(([key, framework]) => `
            <article class="tech-card framework-card ${activeFramework === key ? 'active' : ''}">
                <div class="framework-card-head"><div><span class="badge">${escapeHtml(framework.category)}</span><h3>${escapeHtml(framework.short)}</h3></div><span class="badge ${framework.level === 'Avançado' ? 'advanced' : framework.level === 'Intermediário' ? 'medium' : ''}">${escapeHtml(framework.level)}</span></div>
                <p>${escapeHtml(framework.what)}</p>
                <div class="best"><strong>Use para:</strong> ${escapeHtml(framework.when)}</div>
                <div class="best"><strong>Componentes:</strong> ${framework.fields.map(field => escapeHtml(field[0])).join(', ')}</div>
                <div class="best"><strong>Exemplo:</strong> ${escapeHtml(framework.fields[0][2])}</div>
                <button class="btn" type="button" data-use-tech="${key}">Usar no Builder</button>
            </article>`).join('') : '<div class="empty guide-empty">Nenhum framework encontrado.</div>';
    }

    function selectFramework(key, announce = true) {
        if (!frameworks[key]) return;
        rememberDraft();
        activeFramework = key;
        renderForm();
        renderGuide();
        if (announce) toast(`${frameworks[key].short} selecionado. Seu rascunho anterior foi mantido.`);
    }

    Object.entries(frameworks).forEach(([key, framework]) => select.add(new Option(framework.name, key)));
    select.addEventListener('change', () => selectFramework(select.value));
    guide.addEventListener('click', event => {
        const button = event.target.closest('[data-use-tech]');
        if (button) selectFramework(button.dataset.useTech);
    });
    search.addEventListener('input', renderGuide);
    level.addEventListener('change', renderGuide);

    renderForm();
    renderGuide();
    return {
        selectFramework,
        clear() {
            if (!composePrompt(form) || confirm('Limpar todos os campos deste framework?')) {
                drafts.delete(activeFramework);
                renderForm();
            }
        },
        getPrompt: () => composePrompt(form)
    };
}
