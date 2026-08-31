import { frameworks } from './data/frameworks.js';
import { techniques } from './data/techniques.js';
import { workflows } from './data/workflows.js';
import { composePrompt } from './prompt.js';
import { escapeHtml } from './ui.js';

export function createBuilder({ select, form, info, preview, toast }) {
    const drafts = new Map();
    let activeFramework = Object.keys(frameworks)[0];

    const techniqueOptions = document.getElementById('builderTechniques');
    const workflowOptions = document.getElementById('builderWorkflows');
    const fewShotFields = document.getElementById('fewShotFields');
    const fewShotList = document.getElementById('fewShotList');
    const addFewShotBtn = document.getElementById('addFewShotBtn');

    let fewShots = []; // array of { id, input, output }
    let fewShotIdCounter = 0;

    const getSelectedTechniques = () => [...techniqueOptions.querySelectorAll('input:checked')]
        .map(input => techniques.find(technique => technique.id === input.value));
    const getSelectedWorkflow = () => {
        const selected = workflowOptions.querySelector('input:checked');
        return selected ? workflows.find(workflow => workflow.id === selected.value) : null;
    };

    const readFields = () => Object.fromEntries(
        [...form.querySelectorAll('textarea')].map(field => [field.dataset.label, field.value])
    );
    const rememberDraft = () => drafts.set(activeFramework, readFields());

    function getFewShotsData() {
        return fewShots.map(shot => {
            const inputEl = document.getElementById(`fs-input-${shot.id}`);
            const outputEl = document.getElementById(`fs-output-${shot.id}`);
            return {
                input: inputEl ? inputEl.value : '',
                output: outputEl ? outputEl.value : ''
            };
        });
    }

    function updatePreview() {
        const content = composePrompt(form, getSelectedTechniques(), getSelectedWorkflow(), getFewShotsData());
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

    function renderFewShots() {
        fewShotList.innerHTML = fewShots.map((shot, index) => `
            <div class="few-shot-item" id="fs-item-${shot.id}">
                <div class="few-shot-item-header">
                    <span class="few-shot-item-title">Exemplo ${index + 1}</span>
                    <button class="few-shot-remove-btn" type="button" data-remove-id="${shot.id}">Excluir</button>
                </div>
                <textarea id="fs-input-${shot.id}" placeholder="Exemplo de Entrada (input)...">${escapeHtml(shot.input)}</textarea>
                <textarea id="fs-output-${shot.id}" placeholder="Exemplo de Saída esperada (output)...">${escapeHtml(shot.output)}</textarea>
            </div>
        `).join('');

        fewShots.forEach(shot => {
            const inputEl = document.getElementById(`fs-input-${shot.id}`);
            const outputEl = document.getElementById(`fs-output-${shot.id}`);
            const changeHandler = () => {
                shot.input = inputEl.value;
                shot.output = outputEl.value;
                updatePreview();
            };
            if (inputEl) inputEl.addEventListener('input', changeHandler);
            if (outputEl) outputEl.addEventListener('input', changeHandler);
        });
    }

    function selectFramework(key, announce = true) {
        if (!frameworks[key]) return;
        rememberDraft();
        activeFramework = key;
        renderForm();
        if (announce) toast(`${frameworks[key].short} selecionado. Seu rascunho anterior foi mantido.`);
    }

    techniqueOptions.innerHTML = techniques.map(technique => `<label class="composition-choice"><input type="checkbox" value="${escapeHtml(technique.id)}"><span><strong>${escapeHtml(technique.name)}</strong><small>${escapeHtml(technique.description)}</small></span></label>`).join('');
    workflowOptions.innerHTML = `<label class="composition-choice"><input type="radio" name="builder-workflow" value="" checked><span><strong>Nenhum</strong><small>Use somente o framework e as técnicas selecionadas.</small></span></label>${workflows.map(workflow => `<label class="composition-choice"><input type="radio" name="builder-workflow" value="${escapeHtml(workflow.id)}"><span><strong>${escapeHtml(workflow.name)}</strong><small>${escapeHtml(workflow.steps)}</small></span></label>`).join('')}`;
    techniqueOptions.addEventListener('change', () => {
        fewShotFields.hidden = !techniqueOptions.querySelector('input[value="few-shot"]').checked;
        updatePreview();
    });
    workflowOptions.addEventListener('change', updatePreview);

    Object.entries(frameworks).forEach(([key, framework]) => select.add(new Option(framework.name, key)));
    select.addEventListener('change', () => selectFramework(select.value));
    // Advanced options listeners
    if (addFewShotBtn) {
        addFewShotBtn.addEventListener('click', () => {
            fewShots.push({ id: ++fewShotIdCounter, input: '', output: '' });
            renderFewShots();
            updatePreview();
        });
    }

    if (fewShotList) {
        fewShotList.addEventListener('click', event => {
            const removeBtn = event.target.closest('[data-remove-id]');
            if (removeBtn) {
                const removeId = parseInt(removeBtn.dataset.removeId, 10);
                fewShots = fewShots.filter(s => s.id !== removeId);
                renderFewShots();
                updatePreview();
            }
        });
    }

    renderForm();
    return {
        selectFramework,
        clear() {
            const currentPrompt = composePrompt(form, getSelectedTechniques(), getSelectedWorkflow(), getFewShotsData());
            if (!currentPrompt || confirm('Limpar todos os campos deste framework?')) {
                drafts.delete(activeFramework);
                fewShots = [];
                techniqueOptions.querySelectorAll('input').forEach(input => { input.checked = false; });
                workflowOptions.querySelector('input[value=""]').checked = true;
                fewShotFields.hidden = true;
                renderFewShots();
                renderForm();
            }
        },
        getPrompt: () => composePrompt(form, getSelectedTechniques(), getSelectedWorkflow(), getFewShotsData())
    };
}
