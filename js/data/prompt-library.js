export const promptLibrary = [
    {
        id: 'analise-conformidade', name: 'Análise de conformidade', domain: 'Jurídico',
        subdomain: 'Legislação', objective: 'Avaliar um texto normativo com critérios claros.',
        persona: 'analista de conformidade do setor público', restrictions: 'Não invente requisitos. Indique quando faltarem dados.',
        techniques: ['CoT', 'Structured Output'], tags: ['LGPD', 'análise'],
        template: 'Atue como {{persona}}. Analise {{documento}} considerando {{criterios}}. Aponte riscos, evidências e recomendações. Responda em {{formato}}. Restrições: {{restricoes}}.'
    },
    {
        id: 'plano-aula', name: 'Plano de aula adaptado', domain: 'Educação',
        subdomain: 'Planejamento', objective: 'Criar uma aula adequada ao público e ao tempo disponível.',
        persona: 'professor experiente e didático', restrictions: 'Use linguagem acessível e atividades possíveis com os recursos informados.',
        techniques: ['Co-Star', 'Few-shot'], tags: ['aula', 'planejamento'],
        template: 'Atue como {{persona}}. Crie um plano de aula sobre {{tema}} para {{publico}}, com duração de {{duracao}}. Inclua objetivo, etapas, atividade e avaliação. Adapte tudo a estes recursos: {{recursos}}. Formato: {{formato}}.'
    },
    {
        id: 'diagnostico-negocio', name: 'Diagnóstico de negócio', domain: 'Finanças',
        subdomain: 'Gestão', objective: 'Organizar informações e propor próximos passos práticos.',
        persona: 'consultor financeiro pragmático', restrictions: 'Separe fatos de hipóteses e não trate a análise como aconselhamento profissional.',
        techniques: ['Risen', 'Structured Output'], tags: ['diagnóstico', 'decisão'],
        template: 'Atue como {{persona}}. Analise este cenário: {{cenario}}. Meu objetivo é {{objetivo}}. Considere as restrições {{restricoes}}. Entregue {{formato}}, separando dados observados, hipóteses, riscos e próximos passos.'
    },
    {
        id: 'auditoria-produto', name: 'Auditoria de produto', domain: 'Produto',
        subdomain: 'UX e interface', objective: 'Encontrar fricções concretas em uma tela ou fluxo antes de implementar mudanças.',
        persona: 'designer de produto pragmático', restrictions: 'Priorize clareza, acessibilidade e o menor conjunto de mudanças úteis.',
        techniques: ['Contexto relevante', 'Restrições', 'Formato explícito'], tags: ['UX', 'interface'],
        template: 'Atue como {{persona}}. Analise esta tela ou fluxo: {{tela_ou_fluxo}}. O usuário precisa conseguir {{objetivo_do_usuario}}. Identifique problemas de hierarquia, compreensão e acessibilidade. Entregue achados por prioridade, evidência, impacto e sugestão. Restrições: {{restricoes}}.'
    },
    {
        id: 'revisao-codigo', name: 'Revisão de código orientada', domain: 'Engenharia',
        subdomain: 'Desenvolvimento', objective: 'Revisar uma mudança com foco em riscos reais e próximos passos acionáveis.',
        persona: 'engenheiro de software sênior e cuidadoso', restrictions: 'Não reescreva tudo. Diferencie bugs, riscos e preferências de estilo.',
        techniques: ['Delimitadores', 'Restrições', 'Formato explícito'], tags: ['código', 'debug'],
        template: 'Atue como {{persona}}. Revise o código entre os delimitadores abaixo. Contexto: {{contexto}}. Procure bugs, regressões, riscos de manutenção e testes ausentes. Responda por severidade, com arquivo, evidência e correção sugerida. {{restricoes}}. Código: ```{{codigo}}```.'
    },
    {
        id: 'documentacao-decisao', name: 'Documentação de decisão', domain: 'Trabalho',
        subdomain: 'Documentação', objective: 'Transformar contexto disperso em uma decisão clara e reutilizável.',
        persona: 'facilitador técnico objetivo', restrictions: 'Não invente consenso ou informações ausentes; marque lacunas.',
        techniques: ['Prompt chaining', 'Formato explícito'], tags: ['documentação', 'decisão'],
        template: 'Atue como {{persona}}. Organize estas notas: {{notas}}. Produza um registro com contexto, problema, opções consideradas, decisão, consequências e próximos passos. Público: {{publico}}. Marque explicitamente o que ainda precisa de confirmação. {{restricoes}}.'
    }
];
