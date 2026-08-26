import { techniques } from './data/techniques.js';
import { promptLibrary } from './data/prompt-library.js';
import { createPromptLibrary } from './library.js';
import { createBuilder } from './builder.js';
import { createExplore } from './explore.js';
import { $, copyText, createToast, escapeHtml, initializeTheme, showMode } from './ui.js';

const toast = createToast($('#toast'));
const builder = createBuilder({
    select: $('#technique'), form: $('#promptForm'), info: $('#techInfo'), preview: $('#preview'),
    guide: $('#techGrid'), search: $('#guideSearch'), level: $('#guideLevel'), toast
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
createPromptLibrary({ search: $('#librarySearch'), domain: $('#guideDomain'), technique: $('#guideTechnique'), results: $('#promptLibraryGrid'), preview: $('#libraryPreview'), toast });

$('#techniqueGrid').innerHTML = techniques.map(technique => `<div class="principle"><strong>${escapeHtml(technique.name)}</strong><span>${escapeHtml(technique.description)}</span></div>`).join('');

document.querySelectorAll('[data-mode]').forEach(tab => tab.addEventListener('click', () => showMode(tab.dataset.mode)));
$('#copyBtn').addEventListener('click', () => copyText(builder.getPrompt(), toast));
$('#clearBtn').addEventListener('click', builder.clear);
$('#exploreRestartBtn').addEventListener('click', explore.restart);
initializeTheme($('#themeToggle'));
