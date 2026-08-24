export const frameworks = {
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
