const frameworks = {
    rtf: {
        name: 'RTF — Role, Task, Format',
        short: 'RTF',
        level: 'Básico',
        category: 'Produtividade',
        what: 'Uma estrutura curta que define o papel, a tarefa e a forma da resposta.',
        when: 'Tarefas profissionais diretas, revisões, explicações e produção de conteúdo com saída previsível.',
        best: 'Quando você sabe exatamente o que quer e precisa estruturar rapidamente.',
        fields: [
            ['Role', 'Quem deve responder e qual perspectiva deve adotar.', 'Ex.: Atue como um desenvolvedor backend sênior.'],
            ['Task', 'A ação concreta que deve ser executada.', 'Ex.: Revise este endpoint e identifique problemas.'],
            ['Format', 'Como a resposta deve ser entregue.', 'Ex.: Liste os problemas por prioridade e proponha correções.']
        ]
    },
    ctf: {
        name: 'CTF — Context, Task, Format',
        short: 'CTF',
        level: 'Básico',
        category: 'Análise',
        what: 'Prioriza o cenário antes da tarefa e do formato.',
        when: 'Problemas em que conhecer o estado atual, dados ou antecedentes é mais importante que assumir uma persona.',
        best: 'Diagnóstico, suporte, análise de código, negócio e decisões contextualizadas.',
        fields: [
            ['Context', 'Informações de cenário que alteram a resposta.', 'Ex.: Tenho uma API Spring Boot com alto tempo de resposta.'],
            ['Task', 'O que deve ser analisado ou produzido.', 'Ex.: Analise possíveis gargalos de desempenho.'],
            ['Format', 'Estrutura esperada para a saída.', 'Ex.: Tabela com causa, impacto e solução.']
        ]
    },
    ape: {
        name: 'APE — Action, Purpose, Expectation',
        short: 'APE',
        level: 'Básico',
        category: 'Produtividade',
        what: 'Estrutura minimalista baseada em ação, propósito e expectativa.',
        when: 'Pedidos rápidos em que uma persona não é necessária, mas o motivo e o resultado esperado precisam ficar claros.',
        best: 'Resumos, transformações, pequenas análises e tarefas pontuais.',
        fields: [
            ['Action', 'A ação que deve ser executada.', 'Ex.: Resuma o relatório anexado.'],
            ['Purpose', 'Por que a tarefa está sendo feita.', 'Ex.: Preciso decidir se vale ler o documento completo.'],
            ['Expectation', 'O que caracteriza uma resposta útil.', 'Ex.: 5 pontos principais e uma conclusão de uma frase.']
        ]
    },
    tag: {
        name: 'TAG — Task, Action, Goal',
        short: 'TAG',
        level: 'Básico',
        category: 'Execução',
        what: 'Liga uma tarefa a uma ação específica e a um objetivo mensurável.',
        when: 'Quando é importante deixar explícito não apenas o que fazer, mas qual resultado a ação deve perseguir.',
        best: 'Planos de melhoria, execução operacional e tarefas orientadas a resultado.',
        fields: [
            ['Task', 'Defina a tarefa ou problema.', 'Ex.: Avalie o processo de onboarding.'],
            ['Action', 'Declare a ação esperada.', 'Ex.: Identifique os três maiores pontos de abandono.'],
            ['Goal', 'Explique o resultado que deseja atingir.', 'Ex.: Reduzir o abandono do onboarding em 15%.']
        ]
    },
    care: {
        name: 'CARE — Context, Action, Result, Example',
        short: 'CARE',
        level: 'Intermediário',
        category: 'Comunicação',
        what: 'Combina contexto e ação com resultado desejado e um exemplo de referência.',
        when: 'Quando um exemplo ajuda a tornar o padrão esperado mais concreto.',
        best: 'Conteúdo, comunicação, transformação de texto e entregas com padrão de qualidade definido.',
        fields: [
            ['Context', 'Explique o cenário e informações relevantes.', 'Ex.: Estamos lançando um SaaS para pequenas empresas.'],
            ['Action', 'Defina o que deve ser produzido.', 'Ex.: Escreva a mensagem de anúncio.'],
            ['Result', 'Descreva o efeito ou resultado esperado.', 'Ex.: Explicar o benefício principal e gerar interesse sem exageros.'],
            ['Example', 'Forneça um exemplo real do padrão desejado.', 'Ex.: Cole aqui uma mensagem anterior cujo estilo funcionou bem.']
        ]
    },
    race: {
        name: 'RACE — Role, Action, Context, Expectation',
        short: 'RACE',
        level: 'Intermediário',
        category: 'Profissional',
        what: 'Expande o role prompting adicionando ação, contexto e expectativa.',
        when: 'Tarefas profissionais em que perspectiva e cenário influenciam a qualidade da resposta.',
        best: 'Consultoria, análise especializada, revisão e recomendações.',
        fields: [
            ['Role', 'Defina a especialidade ou perspectiva.', 'Ex.: Atue como analista de produto.'],
            ['Action', 'Defina a ação principal.', 'Ex.: Avalie a proposta do novo recurso.'],
            ['Context', 'Forneça o cenário necessário.', 'Ex.: O produto atende equipes pequenas e possui baixo orçamento.'],
            ['Expectation', 'Defina critérios para uma boa resposta.', 'Ex.: Aponte riscos, oportunidades e uma recomendação final.']
        ]
    },
    risen: {
        name: 'RISEN — Role, Instructions, Steps, End Goal, Narrowing',
        short: 'RISEN',
        level: 'Avançado',
        category: 'Workflows',
        what: 'Estrutura tarefas complexas com papel, instruções, etapas, objetivo final e limites.',
        when: 'Fluxos de várias etapas, processos empresariais e tarefas com critérios ou restrições importantes.',
        best: 'Quando o processo importa tanto quanto o resultado.',
        fields: [
            ['Role', 'Perspectiva ou especialidade necessária.', 'Ex.: Atue como arquiteto de software.'],
            ['Instructions', 'Instruções principais da tarefa.', 'Ex.: Avalie a arquitetura atual e proponha melhorias.'],
            ['Steps', 'Etapas que devem orientar a execução.', 'Ex.: 1. Acoplamentos. 2. Módulos. 3. Mudanças.'],
            ['End Goal', 'Estado final que deseja alcançar.', 'Ex.: Obter uma arquitetura mais simples e sustentável.'],
            ['Narrowing', 'Limites, restrições e exclusões.', 'Ex.: Não introduza microsserviços nem novas dependências.']
        ]
    },
    costar: {
        name: 'CO-STAR — Context, Objective, Style, Tone, Audience, Response',
        short: 'CO-STAR',
        level: 'Intermediário',
        category: 'Comunicação',
        what: 'Framework popularizado pelo GovTech Singapore para controlar contexto, objetivo, estilo, tom, audiência e resposta.',
        when: 'Comunicação, marketing e conteúdo em que a mesma informação precisa ser adaptada para um público e uma voz específicos.',
        best: 'Quando tom, audiência e apresentação têm impacto direto no resultado.',
        fields: [
            ['Context', 'Background necessário para compreender a situação.', 'Ex.: O texto será publicado em um blog técnico.'],
            ['Objective', 'Resultado que a resposta deve alcançar.', 'Ex.: Explicar cache para desenvolvedores iniciantes.'],
            ['Style', 'Forma de escrita ou referência estilística.', 'Ex.: Didático, objetivo e com exemplos.'],
            ['Tone', 'Atitude emocional da comunicação.', 'Ex.: Profissional e acessível.'],
            ['Audience', 'Quem consumirá a resposta.', 'Ex.: Desenvolvedores backend em início de carreira.'],
            ['Response', 'Formato, extensão ou estrutura final.', 'Ex.: Artigo curto com exemplos e resumo final.']
        ]
    },
    crispe: {
        name: 'CRISPE — Capacity, Insight, Statement, Personality, Experiment',
        short: 'CRISPE',
        level: 'Avançado',
        category: 'Exploração',
        what: 'Estrutura prompts exploratórios combinando capacidade, contexto, tarefa, personalidade e alternativas.',
        when: 'Brainstorming e problemas abertos em que você quer comparar possibilidades em vez de receber uma única solução.',
        best: 'Ideação, estratégia, criação de alternativas e exploração de caminhos.',
        fields: [
            ['Capacity', 'Defina a capacidade ou papel necessário.', 'Ex.: Atue como estrategista de produto.'],
            ['Insight', 'Forneça contexto, dados e informações úteis.', 'Ex.: O produto tem 2 mil usuários e retenção baixa no primeiro mês.'],
            ['Statement', 'Declare claramente o que precisa ser feito.', 'Ex.: Proponha formas de melhorar a ativação.'],
            ['Personality', 'Defina o estilo ou comportamento da resposta.', 'Ex.: Analítico, crítico e pragmático.'],
            ['Experiment', 'Peça alternativas ou variações comparáveis.', 'Ex.: Gere 3 estratégias distintas com prós, contras e hipótese principal.']
        ]
    },
    free: {
        name: 'Prompt Livre',
        short: 'Livre',
        level: 'Intermediário',
        category: 'Geral',
        what: 'Estrutura genérica para contexto, objetivo, instruções, restrições e formato.',
        when: 'Quando nenhum framework se encaixa bem ou quando você precisa combinar elementos de vários deles.',
        best: 'Prompts personalizados e tarefas com requisitos próprios.',
        fields: [
            ['Contexto', 'Informações que ajudam a compreender o problema.', 'Ex.: Estou construindo um MVP sem backend.'],
            ['Objetivo', 'Resultado final desejado.', 'Ex.: Criar uma interface simples e responsiva.'],
            ['Instruções', 'Orientações relevantes para a execução.', 'Ex.: Priorize clareza, acessibilidade e código legível.'],
            ['Restrições', 'Limites técnicos, de escopo ou comportamento.', 'Ex.: Não use frameworks.'],
            ['Formato de resposta', 'Como a resposta deve ser entregue.', 'Ex.: Entregue um único index.html completo.']
        ]
    }
};

const $ = s => document.querySelector(s);
const technique = $('#technique');
const form = $('#promptForm');
const preview = $('#preview');
const techInfo = $('#techInfo');
const savedList = $('#savedList');
const modal = $('#saveModal');
const nameInput = $('#promptName');
const techGrid = $('#techGrid');
let editingId = null;
const KEY = 'prompt-factory-library-v1';

Object.entries(frameworks).forEach(([k, v]) => technique.add(new Option(v.name, k)));

function renderTechnique(values = {}) {
    const t = frameworks[technique.value];
    techInfo.innerHTML = `
        <p><strong>O que é:</strong> ${esc(t.what)}</p>
        <p><strong>Quando usar:</strong> ${esc(t.when)}</p>
        <p><strong>Mais adequado para:</strong> ${esc(t.best)}</p>
    `;
    form.innerHTML = t.fields.map(([name, help, ph], i) => `
        <div class="field field-enter">
            <label for="f${i}">${esc(name)}</label>
            <span class="help">${esc(help)}</span>
            <textarea id="f${i}" data-label="${esc(name)}" placeholder="${esc(ph)}"></textarea>
        </div>
    `).join('');
    t.fields.forEach((f, i) => {
        if (values[f[0]]) $('#f' + i).value = values[f[0]];
    });
    form.querySelectorAll('textarea').forEach(el => el.addEventListener('input', updatePreview));
    updatePreview();
}

function buildPrompt() {
    return [...form.querySelectorAll('textarea')]
        .map(el => ({ label: el.dataset.label, value: el.value.trim() }))
        .filter(x => x.value)
        .map(x => `${x.label}:\n${x.value}`)
        .join('\n\n');
}

function updatePreview() {
    const content = buildPrompt();
    preview.innerHTML = content ? esc(content) : '<span class="preview-empty-title">Seu prompt aparecerá aqui.</span><span>Escolha um framework e preencha os campos ao lado.</span>';
}

function renderGuide() {
    const q = $('#guideSearch').value.trim().toLowerCase();
    const level = $('#guideLevel').value;
    const entries = Object.entries(frameworks)
        .filter(([k, t]) => k !== 'free')
        .filter(([k, t]) => (level === 'all' || t.level === level) &&
            (`${t.name} ${t.what} ${t.when} ${t.best} ${t.category}`.toLowerCase().includes(q)));

    techGrid.innerHTML = entries.length ?
        entries.map(([k, t]) => `
            <article class="tech-card framework-card ${technique.value === k ? 'active' : ''}">
                <div style="display:flex;justify-content:space-between;gap:8px;align-items:start">
                    <div>
                        <span class="badge">${esc(t.category)}</span>
                        <h3>${esc(t.short)}</h3>
                    </div>
                    <span class="badge ${t.level === 'Avançado' ? 'advanced' : t.level === 'Intermediário' ? 'medium' : ''}">${esc(t.level)}</span>
                </div>
                <p>${esc(t.what)}</p>
                <div class="best"><strong>Use para:</strong> ${esc(t.when)}</div>
                <button class="btn" data-use-tech="${esc(k)}">Usar no Builder</button>
            </article>
        `).join('') :
        '<div class="empty" style="grid-column:1/-1">Nenhum framework encontrado.</div>';
}

function clearForm() {
    form.reset();
    editingId = null;
    updatePreview();
}

function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => el.classList.remove('show'), 1800);
}

async function copyText(text) {
    if (!text) return toast('Não há conteúdo para copiar.');
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }
    toast('Prompt copiado.');
}

function getLibrary() {
    try {
        return JSON.parse(localStorage.getItem(KEY)) ||
            JSON.parse(localStorage.getItem('prompt-builder-library-v1')) ||
            [];
    } catch {
        return [];
    }
}

function setLibrary(v) {
    localStorage.setItem(KEY, JSON.stringify(v));
    renderLibrary();
}

function openSave() {
    if (!buildPrompt()) return toast('Preencha ao menos um campo.');
    nameInput.value = '';
    $('#modalTitle').textContent = editingId ? 'Atualizar prompt' : 'Salvar prompt';
    $('#modalFramework').textContent = frameworks[technique.value].name;
    modal.classList.add('open');
    setTimeout(() => nameInput.focus(), 30);
}

function closeSave() {
    modal.classList.remove('open');
}

function savePrompt() {
    const name = nameInput.value.trim();
    if (!name) return nameInput.focus();
    const lib = getLibrary();
    const content = buildPrompt();
    const fields = {};
    form.querySelectorAll('textarea').forEach(el => fields[el.dataset.label] = el.value);

    const wasEditing = Boolean(editingId);
    if (editingId) {
        const i = lib.findIndex(p => p.id === editingId);
        if (i >= 0) lib[i] = {
            ...lib[i],
            name,
            framework: technique.value,
            content,
            fields,
            updatedAt: new Date().toISOString()
        };
    } else {
        lib.unshift({
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            name,
            framework: technique.value,
            content,
            fields,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }
    setLibrary(lib);
    closeSave();
    editingId = null;
    toast(wasEditing ? 'Prompt atualizado.' : 'Prompt salvo.');
}

function esc(s = '') {
    return String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }[c]));
}

function renderLibrary() {
    const lib = getLibrary();
    if (!lib.length) {
        savedList.innerHTML = '<div class="empty" style="grid-column:1/-1"><strong>Nenhum prompt salvo.</strong><span>Os prompts que você salvar no Builder aparecerão aqui.</span></div>';
        return;
    }
    savedList.innerHTML = lib.map(p => {
        const framework = p.framework || p.technique;
        return `
            <article class="saved-item">
                <h3>${esc(p.name)}</h3>
                <div class="meta">${esc(frameworks[framework]?.short || framework)} · ${new Date(p.createdAt).toLocaleDateString('pt-BR')}</div>
                <div class="snippet">${esc(p.content)}</div>
                <div class="item-actions">
                    <button class="btn" data-act="open" data-id="${esc(p.id)}">Abrir</button>
                    <button class="btn" data-act="copy" data-id="${esc(p.id)}">Copiar</button>
                    <button class="btn" data-act="edit" data-id="${esc(p.id)}">Editar</button>
                    <button class="btn danger" data-act="delete" data-id="${esc(p.id)}">Excluir</button>
                </div>
            </article>
        `;
    }).join('');
}

function loadPrompt(p, edit = false) {
    const framework = p.framework || p.technique;
    if (!frameworks[framework]) return toast('Framework não reconhecido.');
    technique.value = framework;
    editingId = edit ? p.id : null;
    renderTechnique(p.fields || parseFields({ ...p, technique: framework }));
    renderGuide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    toast(edit ? 'Prompt aberto para edição.' : 'Prompt aberto.');
}

function parseFields(p) {
    const out = {};
    frameworks[p.technique].fields.forEach(([label]) => {
        const safe = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(?:^|\\n\\n)${safe}:\\n([\\s\\S]*?)(?=\\n\\n[^\\n]+:\\n|$)`);
        const m = p.content.match(re);
        if (m) out[label] = m[1];
    });
    return out;
}

savedList.addEventListener('click', e => {
    const b = e.target.closest('button[data-act]');
    if (!b) return;
    const lib = getLibrary();
    const p = lib.find(x => x.id === b.dataset.id);
    if (!p) return;
    if (b.dataset.act === 'open') loadPrompt(p);
    if (b.dataset.act === 'edit') loadPrompt(p, true);
    if (b.dataset.act === 'copy') copyText(p.content);
    if (b.dataset.act === 'delete' && confirm(`Excluir “${p.name}”?`)) {
        setLibrary(lib.filter(x => x.id !== p.id));
    }
});

techGrid.addEventListener('click', e => {
    const b = e.target.closest('[data-use-tech]');
    if (!b) return;
    technique.value = b.dataset.useTech;
    editingId = null;
    renderTechnique();
    renderGuide();
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
            toast(`${frameworks[b.dataset.useTech].short} selecionado.`);
});

function exportJSON() {
    const data = JSON.stringify({
        app: 'Prompt Factory',
        version: 1,
        exportedAt: new Date().toISOString(),
        prompts: getLibrary()
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prompt-factory-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

function importJSON(file) {
    const r = new FileReader();
    r.onload = () => {
        try {
            const raw = JSON.parse(r.result);
            const items = Array.isArray(raw) ? raw : raw.prompts;
            if (!Array.isArray(items)) throw 0;
            const valid = items.filter(p => {
                const framework = p && (p.framework || p.technique);
                return p && typeof p.name === 'string' &&
                    typeof p.content === 'string' &&
                    frameworks[framework];
            }).map(p => {
                const framework = p.framework || p.technique;
                return {
                    ...p,
                    id: String(p.id || Date.now() + Math.random()),
                    framework,
                    fields: p.fields && typeof p.fields === 'object' ? p.fields : parseFields({ ...p, technique: framework }),
                    createdAt: p.createdAt || new Date().toISOString(),
                    updatedAt: p.updatedAt || p.createdAt || new Date().toISOString()
                };
            });
            if (!valid.length) throw 0;
            const current = getLibrary();
            const ids = new Set(current.map(p => String(p.id)));
            setLibrary([
                ...valid.filter(p => !ids.has(String(p.id))),
                ...current
            ]);
            toast(`${valid.length} prompt(s) importado(s).`);
        } catch {
            toast('Arquivo JSON inválido ou incompatível.');
        } finally {
            $('#fileInput').value = '';
        }
    };
    r.readAsText(file);
}

technique.addEventListener('change', () => {
    editingId = null;
    renderTechnique();
    renderGuide();
});

$('#guideSearch').addEventListener('input', renderGuide);
$('#guideLevel').addEventListener('change', renderGuide);

$('#copyBtn').onclick = () => copyText(buildPrompt());
$('#clearBtn').onclick = () => {
    if (!buildPrompt() || confirm('Limpar todos os campos?')) clearForm();
};
$('#saveBtn').onclick = openSave;
$('#cancelSave').onclick = closeSave;
$('#confirmSave').onclick = savePrompt;
nameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') savePrompt();
});
modal.addEventListener('click', e => {
    if (e.target === modal) closeSave();
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeSave();
});
$('#exportBtn').onclick = exportJSON;
$('#importBtn').onclick = () => $('#fileInput').click();
$('#fileInput').addEventListener('change', e => {
    if (e.target.files[0]) importJSON(e.target.files[0]);
});

renderTechnique();
renderGuide();
renderLibrary();
