import { techniques } from './data/techniques.js';
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

const techniqueDetails = {
    context: ['Básico', 'Dê ao modelo somente o contexto que muda a decisão.', 'Use antes de pedir uma análise ou transformação.'],
    'specific-instruction': ['Básico', 'Troque pedidos vagos por uma ação e critérios observáveis.', 'Use quando a resposta estiver genérica ou superficial.'],
    'structured-output': ['Básico', 'Defina campos, ordem, tamanho ou formato da saída.', 'Use quando você precisa comparar, revisar ou reutilizar o resultado.'],
    'few-shot': ['Intermediário', 'Mostre exemplos de entrada e saída para ensinar um padrão.', 'Use quando explicar o padrão em palavras não for suficiente.'],
    delimiters: ['Básico', 'Separe dados, contexto e instruções com marcadores claros.', 'Use em prompts longos ou com textos colados.'],
    constraints: ['Básico', 'Explicite limites, exclusões e critérios de qualidade.', 'Use quando existem riscos, regras ou escopo definido.']
    ,'zero-shot': ['Básico', 'Peça diretamente quando a tarefa for simples e bem delimitada.', 'Use para uma primeira tentativa rápida.']
    ,'self-consistency': ['Avançado', 'Peça caminhos independentes e compare a conclusão comum.', 'Use em decisões com mais de uma interpretação possível.']
    ,'prompt-chaining': ['Intermediário', 'Quebre um fluxo grande em entradas e saídas intermediárias.', 'Use quando uma única instrução ficar difícil de revisar.']
    ,react: ['Avançado', 'Estruture ciclos de pensar, agir e observar quando houver ferramentas.', 'Use em tarefas que consultam dados ou executam ações.']
    ,'tree-of-thoughts': ['Avançado', 'Explore opções como uma árvore antes de selecionar uma solução.', 'Use em planejamento, estratégia e problemas abertos.']
    ,rag: ['Intermediário', 'Ancore a resposta em documentos ou dados recuperados.', 'Use quando a precisão depende de uma fonte específica.']
};
$('#techniqueGrid').innerHTML = techniques.map(technique => { const [level, when, example] = techniqueDetails[technique.id]; return `<article class="principle technique-card"><span class="section-label">${escapeHtml(level)}</span><h3>${escapeHtml(technique.name)}</h3><p>${escapeHtml(technique.description)}</p><div class="technique-example">${escapeHtml(when)}</div><div class="technique-meta"><span class="technique-level">Exemplo: ${escapeHtml(example)}</span></div></article>`; }).join('');

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
