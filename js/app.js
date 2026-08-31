import { techniques } from './data/techniques.js';
import { workflows } from './data/workflows.js';
import { promptLibrary } from './data/prompt-library.js';
import { createPromptLibrary } from './library.js';
import { createBuilder } from './builder.js';
import { createExplore } from './explore.js';
import { $, copyText, createToast, escapeHtml, initializeTheme, showMode } from './ui.js';

const toast = createToast($('#toast'));
const builder = createBuilder({
    select: $('#technique'), form: $('#promptForm'), info: $('#techInfo'), preview: $('#preview'), toast
});
const explore = createExplore({
    categories: $('#exploreCategories'), result: $('#exploreResult'), title: $('#exploreResultTitle'),
    needs: $('#exploreNeeds'), recommendations: $('#exploreRecommendations'),
    onBuild(framework) {
        builder.selectFramework(framework, false);
        showMode('build');
        $('#buildPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
        toast('Framework aberto no Builder. Preencha os componentes com o seu conteúdo.');
    }
});

const domains = [...new Set(promptLibrary.map(prompt => prompt.domain))];
const libraryTechniques = [...new Set(promptLibrary.flatMap(prompt => prompt.techniques))];
$('#guideDomain').insertAdjacentHTML('beforeend', domains.map(domain => `<option value="${escapeHtml(domain)}">${escapeHtml(domain)}</option>`).join(''));
$('#guideTechnique').insertAdjacentHTML('beforeend', libraryTechniques.map(technique => `<option value="${escapeHtml(technique)}">${escapeHtml(technique)}</option>`).join(''));
createPromptLibrary({ search: $('#librarySearch'), domain: $('#guideDomain'), technique: $('#guideTechnique'), results: $('#promptLibraryGrid'), summary: $('#libraryResults'), preview: $('#libraryPreview'), toast });

$('#techniqueGrid').innerHTML = techniques.map(technique => `<article class="principle technique-card"><span class="section-label">${escapeHtml(technique.level)}</span><h3>${escapeHtml(technique.name)}</h3><p>${escapeHtml(technique.description)}</p><div class="technique-example">${escapeHtml(technique.when)}</div></article>`).join('');
$('#workflowGrid').innerHTML = workflows.map(workflow => `<article class="principle technique-card"><span class="section-label">Workflow</span><h3>${escapeHtml(workflow.name)}</h3><p>${escapeHtml(workflow.description)}</p><div class="technique-example">${escapeHtml(workflow.when)}</div><div class="technique-meta"><span class="technique-level">${escapeHtml(workflow.steps)}</span></div></article>`).join('');

const modeTabs = [...document.querySelectorAll('[data-mode]')];
modeTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => showMode(tab.dataset.mode));
    tab.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const nextIndex = event.key === 'Home' ? 0 : event.key === 'End' ? modeTabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + modeTabs.length) % modeTabs.length;
        const nextTab = modeTabs[nextIndex];
        nextTab.focus();
        showMode(nextTab.dataset.mode);
    });
});
$('#copyBtn').addEventListener('click', () => copyText(builder.getPrompt(), toast));
$('#clearBtn').addEventListener('click', builder.clear);
$('#exploreRestartBtn').addEventListener('click', explore.restart);
initializeTheme($('#themeToggle'));
