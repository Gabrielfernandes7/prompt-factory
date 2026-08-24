import { techniques } from './data/techniques.js';
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

$('#techniqueGrid').innerHTML = techniques.map(technique => `<div class="principle"><strong>${escapeHtml(technique.name)}</strong><span>${escapeHtml(technique.description)}</span></div>`).join('');

document.querySelectorAll('[data-mode]').forEach(tab => tab.addEventListener('click', () => showMode(tab.dataset.mode)));
$('#copyBtn').addEventListener('click', () => copyText(builder.getPrompt(), toast));
$('#clearBtn').addEventListener('click', builder.clear);
$('#exploreRestartBtn').addEventListener('click', explore.restart);
initializeTheme($('#themeToggle'));
