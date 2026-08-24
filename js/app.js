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
let activePromptOverride = '';
let activeExploreTemplate = null;

const exploreTemplates = [
    { id:'debug-code', category:'programming', title:'Investigar um erro no código', framework:'ctf', techniques:['constraints','structured-output'], intro:'Encontre a causa de um problema e receba uma correção explicada.', fields:[['Código ou erro','Cole o trecho de código, mensagem de erro ou comportamento inesperado.'],['O que deveria acontecer?','Descreva o resultado esperado.'],['Restrições','Versão, linguagem, bibliotecas ou limites importantes.']] },
    { id:'explain-code', category:'programming', title:'Entender um código', framework:'ctf', techniques:['context','structured-output'], intro:'Transforme código difícil em uma explicação clara e prática.', fields:[['Código','Cole o trecho que você quer entender.'],['Seu nível de conhecimento','Por exemplo: iniciante, intermediário ou experiente.'],['O que quer entender?','Diga se quer uma visão geral, uma linha específica ou os riscos.']] },
    { id:'write-content', category:'marketing', title:'Escrever conteúdo para uma campanha', framework:'costar', techniques:['context','structured-output'], intro:'Crie uma peça de conteúdo alinhada ao público e ao objetivo.', fields:[['O que está divulgando?','Produto, serviço ou ideia.'],['Para quem?','Descreva o público.'],['Objetivo e canal','Ex.: gerar cliques no Instagram, explicar em um blog.'],['Tom desejado','Ex.: direto, educativo, próximo.']] },
    { id:'study-topic', category:'studies', title:'Estudar um assunto', framework:'ctf', techniques:['structured-output'], intro:'Organize uma explicação ou plano de estudo que faça sentido para você.', fields:[['Assunto','O que você quer aprender?'],['Seu nível atual','O que já sabe sobre o assunto?'],['Como quer estudar?','Ex.: resumo, exemplos, perguntas, plano de 7 dias.']] },
    { id:'business-decision', category:'business', title:'Analisar uma decisão de negócio', framework:'race', techniques:['context','constraints','structured-output'], intro:'Compare opções e chegue a uma decisão com critérios claros.', fields:[['Situação','Descreva o negócio e o problema.'],['Opções','Quais caminhos estão sendo considerados?'],['Critérios','O que pesa na decisão: custo, prazo, risco ou outro?'],['Formato da análise','Ex.: tabela comparativa e recomendação final.']] },
    { id:'review-code', category:'programming', title:'Revisar um código', framework:'rtf', techniques:['constraints','structured-output'], intro:'Receba uma revisão objetiva com prioridades e sugestões.', fields:[['Código','Cole o código para revisar.'],['Foco da revisão','Ex.: segurança, legibilidade, desempenho ou tudo.'],['Contexto técnico','Linguagem, framework e versão.']] },
    { id:'api-design', category:'programming', title:'Projetar uma API', framework:'risen', techniques:['constraints','structured-output'], intro:'Estruture uma proposta de API com decisões justificadas.', fields:[['O que a API precisa fazer?','Descreva os recursos principais.'],['Quem vai usar?','Clientes, frontend, parceiros ou outro público.'],['Regras e limites','Autenticação, volume, compatibilidade ou restrições.']] },
    { id:'social-post', category:'marketing', title:'Criar uma publicação para redes sociais', framework:'costar', techniques:['context','structured-output'], intro:'Crie uma publicação pronta para o canal escolhido.', fields:[['Tema ou oferta','O que a publicação deve comunicar?'],['Público','Para quem você está falando?'],['Canal e objetivo','Ex.: Instagram para gerar comentários.'],['Tom e chamada','Como deve soar e qual ação pedir?']] },
    { id:'email', category:'marketing', title:'Escrever um e-mail profissional', framework:'care', techniques:['context','structured-output'], intro:'Escreva um e-mail claro, adequado ao contexto e ao destinatário.', fields:[['Situação','O que aconteceu ou precisa ser comunicado?'],['Destinatário','Quem receberá o e-mail?'],['Resultado desejado','O que a pessoa deve entender ou fazer?']] },
    { id:'flashcards', category:'studies', title:'Criar perguntas para revisar', framework:'ape', techniques:['structured-output'], intro:'Gere perguntas úteis para testar sua compreensão.', fields:[['Tema','Qual conteúdo revisar?'],['Nível','Fácil, médio ou difícil?'],['Quantidade e formato','Ex.: 10 perguntas com respostas ao final.']] },
    { id:'study-plan', category:'studies', title:'Montar um plano de estudos', framework:'race', techniques:['constraints','structured-output'], intro:'Monte uma sequência de estudo possível de seguir.', fields:[['Objetivo','O que você quer conseguir aprender?'],['Tempo disponível','Horas por dia ou prazo final.'],['Ponto de partida','O que já sabe?'],['Preferências e limites','Materiais, formato ou assuntos que devem entrar.']] },
    { id:'summarize', category:'studies', title:'Resumir um material', framework:'ctf', techniques:['structured-output'], intro:'Extraia as ideias principais sem perder o sentido do material.', fields:[['Material','Cole o texto ou descreva o conteúdo.'],['Para que usará o resumo?','Ex.: revisão, apresentação ou decisão.'],['Formato','Ex.: tópicos, mapa de ideias ou resumo de 1 página.']] },
    { id:'business-plan', category:'business', title:'Planejar um novo projeto', framework:'risen', techniques:['constraints','structured-output'], intro:'Transforme uma ideia em um plano com próximos passos.', fields:[['Ideia','Descreva o projeto.'],['Resultado esperado','O que precisa estar pronto?'],['Recursos disponíveis','Equipe, orçamento e prazo.'],['Riscos ou limites','O que não pode acontecer?']] },
    { id:'meeting', category:'business', title:'Preparar uma reunião', framework:'rtf', techniques:['structured-output'], intro:'Prepare uma pauta objetiva e fácil de conduzir.', fields:[['Objetivo','O que a reunião precisa resolver?'],['Participantes e contexto','Quem participa e o que já foi discutido?'],['Formato desejado','Ex.: pauta com tempo, perguntas e decisões.']] },
    { id:'process', category:'business', title:'Melhorar um processo', framework:'ctf', techniques:['context','constraints','structured-output'], intro:'Encontre gargalos e proponha melhorias práticas.', fields:[['Processo atual','Descreva as etapas.'],['Problema percebido','Onde há atraso, erro ou retrabalho?'],['Restrições','O que não pode mudar?'],['Resultado desejado','Como saberemos que melhorou?']] },
    { id:'free-form', category:'business', title:'Organizar uma ideia', framework:'ape', techniques:['structured-output'], intro:'Dê forma a uma ideia ainda solta e transforme-a em próximos passos.', fields:[['Ideia','Descreva livremente.'],['Por que isso importa?','Qual problema ou oportunidade existe?'],['O que você quer receber?','Ex.: opções, plano, texto ou perguntas.']] },
    { id:'test-code', category:'programming', title:'Criar testes para um código', framework:'risen', techniques:['constraints','structured-output'], intro:'Cubra os cenários importantes com testes claros.', fields:[['Código ou função','Cole o código que será testado.'],['Comportamentos esperados','O que deve funcionar?'],['Ferramentas e limites','Linguagem, framework de testes ou restrições.']] },
    { id:'landing-page', category:'marketing', title:'Planejar uma página de venda', framework:'costar', techniques:['context','structured-output'], intro:'Organize a mensagem e a estrutura de uma página que converte.', fields:[['Produto e benefício','O que está sendo oferecido?'],['Público e objeções','Quem compra e quais dúvidas tem?'],['Objetivo e tom','Qual ação espera e como quer comunicar?']] },
    { id:'campaign-ideas', category:'marketing', title:'Gerar ideias de campanha', framework:'crispe', techniques:['context','structured-output'], intro:'Explore ideias de campanha com ângulos diferentes e critérios práticos.', fields:[['Oferta ou tema','O que a campanha deve promover?'],['Público e canal','Para quem e onde será divulgada?'],['Objetivo','Qual resultado quer alcançar?'],['Limites','Orçamento, tom ou assuntos a evitar.']] },
    { id:'practice', category:'studies', title:'Praticar com exercícios', framework:'ape', techniques:['structured-output'], intro:'Crie exercícios progressivos para fixar um conteúdo.', fields:[['Tema','O que praticar?'],['Seu nível','O que já consegue fazer?'],['Formato da prática','Ex.: 5 exercícios com dicas e gabarito.']] },
];
const exploreCategories = { programming:['Programação','Código, APIs e problemas técnicos.'], marketing:['Marketing Digital','Conteúdo, campanhas e comunicação.'], studies:['Estudos','Aprendizado, revisão e organização.'], business:['Negócios','Decisões, processos e projetos.'] };

function renderExploreCategories() {
    $('#exploreCategories').innerHTML = Object.entries(exploreCategories).map(([id, item]) => `<button class="category-card" data-category="${id}" type="button"><strong>${item[0]}</strong><span>${item[1]}</span></button>`).join('');
}
function renderExploreForm(category) {
    const items = exploreTemplates.filter(t => t.category === category);
    $('#exploreCategories').innerHTML = items.map(t => `<button class="category-card template-card" data-template="${t.id}" type="button"><strong>${t.title}</strong><span>${t.intro}</span></button>`).join('');
    $('#exploreForm').hidden = true;
    $('#exploreResult').hidden = true;
    $('#exploreCategories').insertAdjacentHTML('beforebegin', `<button class="back-link" id="exploreBack" type="button">← Todas as áreas</button>`);
}
function openExploreTemplate(id) {
    const t = exploreTemplates.find(item => item.id === id);
    if (!t) return;
    $('#exploreCategories').hidden = true;
    $('#exploreForm').hidden = false;
    $('#exploreForm').innerHTML = `<h3>${esc(t.title)}</h3><p>${esc(t.intro)}</p><form id="exploreQuestionForm">${t.fields.map((field, i) => `<div class="field"><label for="explore-${i}">${esc(field[0])}</label><textarea id="explore-${i}" data-label="${esc(field[0])}" placeholder="${esc(field[1])}" required></textarea></div>`).join('')}<button class="btn primary" type="submit">Gerar meu prompt</button></form>`;
    $('#exploreQuestionForm').addEventListener('submit', e => { e.preventDefault(); generateExplorePrompt(t); });
    document.getElementById('explore-0').focus();
}
function generateExplorePrompt(template) {
    const answers = [...document.querySelectorAll('#exploreQuestionForm textarea')].map(el => `${el.dataset.label}:\n${el.value.trim()}`).filter(item => !item.endsWith(':\n'));
    if (!answers.length) return toast('Preencha pelo menos uma resposta.');
    activePromptOverride = `Você é um assistente especializado em ${exploreCategories[template.category][0].toLowerCase()}.\n\nObjetivo:\n${template.title}.\n\n${answers.join('\n\n')}\n\nEntregue uma resposta clara, prática e organizada. Quando faltar informação importante, indique a suposição feita.`;
    activeExploreTemplate = template;
    $('#exploreResultTitle').textContent = template.title;
    $('#explorePrompt').textContent = activePromptOverride;
    $('#exploreResult').hidden = false;
    $('#exploreResult').scrollIntoView({ behavior:'smooth', block:'nearest' });
    toast('Prompt estruturado.');
}
function currentPrompt() { return activePromptOverride || buildPrompt(); }
function activeExploreOverride() { return Boolean(activePromptOverride && activeExploreTemplate); }

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
    return PromptFactoryStorage.read();
}

function setLibrary(v) {
    PromptFactoryStorage.write(v);
    renderLibrary();
}

function openSave() {
    if (!currentPrompt()) return toast('Preencha ao menos um campo.');
    nameInput.value = '';
    $('#modalTitle').textContent = editingId ? 'Atualizar prompt' : 'Salvar prompt';
    $('#modalFramework').textContent = activePromptOverride ? 'Explore · prompt estruturado' : frameworks[technique.value].name;
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
    const content = currentPrompt();
    const fields = {};
    form.querySelectorAll('textarea').forEach(el => fields[el.dataset.label] = el.value);
    if (activeExploreOverride()) document.querySelectorAll('#exploreQuestionForm textarea').forEach(el => fields[el.dataset.label] = el.value);

    const wasEditing = Boolean(editingId);
    if (editingId) {
        const i = lib.findIndex(p => p.id === editingId);
        if (i >= 0) lib[i] = {
            ...lib[i],
            name,
            framework: activeExploreOverride() ? activeExploreTemplate.framework : technique.value,
            content,
            fields,
            source: activeExploreOverride() ? 'explore' : 'build',
            templateId: activeExploreOverride() ? activeExploreTemplate.id : null,
            updatedAt: new Date().toISOString()
        };
    } else {
        lib.unshift({
            id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            name,
            framework: activeExploreOverride() ? activeExploreTemplate.framework : technique.value,
            content,
            fields,
            source: activeExploreOverride() ? 'explore' : 'build',
            templateId: activeExploreOverride() ? activeExploreTemplate.id : null,
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
        savedList.innerHTML = `<div style="grid-column:1/-1">${PromptFactoryComponents.emptyState('Nenhum prompt salvo.', 'Os prompts que você salvar no Builder aparecerão aqui.')}</div>`;
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
    if (p.source === 'explore' && p.templateId) {
        const template = exploreTemplates.find(item => item.id === p.templateId);
        if (template) {
            document.body.classList.remove('mode-build', 'mode-library');
            document.querySelectorAll('.mode-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.mode === 'explore'));
            renderExploreCategories();
            openExploreTemplate(template.id);
            template.fields.forEach((field, i) => { const input = $(`#explore-${i}`); if (input) input.value = p.fields?.[field[0]] || ''; });
            editingId = edit ? p.id : null;
            generateExplorePrompt(template);
            toast(edit ? 'Prompt aberto para edição.' : 'Prompt aberto.');
            return;
        }
    }
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

$('#exploreCopyBtn').onclick = () => copyText(activePromptOverride);
$('#exploreSaveBtn').onclick = openSave;
$('#exploreRestartBtn').onclick = () => { activePromptOverride = ''; activeExploreTemplate = null; $('#exploreResult').hidden = true; $('#exploreForm').hidden = false; };
document.addEventListener('click', e => {
    const mode = e.target.closest('[data-mode]');
    if (mode) {
        document.body.classList.remove('mode-build', 'mode-library');
        if (mode.dataset.mode !== 'explore') document.body.classList.add(`mode-${mode.dataset.mode}`);
        if (mode.dataset.mode === 'build') { activePromptOverride = ''; activeExploreTemplate = null; }
        document.querySelectorAll('.mode-tab').forEach(tab => tab.classList.toggle('active', tab === mode));
    }
    const category = e.target.closest('[data-category]');
    if (category) renderExploreForm(category.dataset.category);
    const template = e.target.closest('[data-template]');
    if (template) openExploreTemplate(template.dataset.template);
    if (e.target.id === 'exploreBack') { e.target.remove(); $('#exploreCategories').hidden = false; renderExploreCategories(); }
});

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    $('#themeToggle').setAttribute('aria-label', `Alternar tema. Tema atual: ${theme === 'dark' ? 'escuro' : 'claro'}`);
    localStorage.setItem('prompt-factory-theme', theme);
}
const savedTheme = localStorage.getItem('prompt-factory-theme');
applyTheme(savedTheme || (new Date().getHours() >= 6 && new Date().getHours() < 18 ? 'light' : 'dark'));
$('#themeToggle').onclick = () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');

renderTechnique();
renderGuide();
renderLibrary();
renderExploreCategories();
