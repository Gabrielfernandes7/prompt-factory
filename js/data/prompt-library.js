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
    }
];
