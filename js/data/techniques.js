export const techniques = [
    {
        id: 'few-shot',
        name: 'Few-shot',
        level: 'Intermediário',
        description: 'Ensina um padrão com exemplos de entrada e saída.',
        when: 'Use quando o formato ou o comportamento esperado for difícil de explicar apenas com regras.',
        instruction: ''
    },
    {
        id: 'decomposition',
        name: 'Decomposition',
        level: 'Intermediário',
        description: 'Divide uma tarefa complexa em subtarefas menores e verificáveis.',
        when: 'Use em código, arquitetura, pesquisa e trabalhos com muitas dependências.',
        instruction: 'Decomponha a tarefa em subtarefas claras. Execute uma etapa por vez e indique as dependências entre elas.'
    },
    {
        id: 'constraints',
        name: 'Constraints',
        level: 'Básico',
        description: 'Define regras, limites, exclusões e critérios de qualidade.',
        when: 'Use quando houver escopo, riscos ou condições que a resposta precisa respeitar.',
        instruction: 'Respeite rigorosamente as restrições e os critérios informados no prompt.'
    },
    {
        id: 'output-specification',
        name: 'Output Specification',
        level: 'Básico',
        description: 'Especifica o formato, os campos, a ordem ou o schema da resposta.',
        when: 'Use quando o resultado será comparado, processado ou reutilizado.',
        instruction: 'Siga exatamente o formato de saída solicitado. Não adicione seções ou campos não pedidos.'
    },
    {
        id: 'reflection',
        name: 'Reflection',
        level: 'Avançado',
        description: 'Produz, avalia e revisa a solução com critérios explícitos.',
        when: 'Use para revisar código, documentos e decisões antes da entrega final.',
        instruction: 'Antes da entrega final, revise a solução quanto a correção, simplicidade e aderência aos requisitos. Corrija as falhas encontradas e apresente apenas a versão revisada.'
    },
    {
        id: 'step-back',
        name: 'Step-back',
        level: 'Avançado',
        description: 'Abstrai o problema e identifica princípios relevantes antes da solução concreta.',
        when: 'Use em arquitetura, debugging e problemas em que a primeira abordagem pode ser estreita demais.',
        instruction: 'Antes de propor a solução, dê um passo atrás: identifique os princípios gerais e as premissas relevantes e então aplique-os ao caso concreto.'
    }
];
