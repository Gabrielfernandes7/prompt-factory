export const techniques = [
    { id: 'context', name: 'Contexto relevante', description: 'Inclua informações que mudam a resposta ou reduzem ambiguidades.' },
    { id: 'specific-instruction', name: 'Instrução específica', description: 'Declare a ação e critérios observáveis em vez de pedidos vagos.' },
    { id: 'structured-output', name: 'Formato explícito', description: 'Defina estrutura, tamanho, campos, ordem ou esquema da saída.' },
    { id: 'few-shot', name: 'Few-shot / exemplos', description: 'Mostre entradas e saídas quando o padrão for difícil de descrever.' },
    { id: 'delimiters', name: 'Delimitadores', description: 'Separe contexto, dados e instruções com marcadores claros.' },
    { id: 'constraints', name: 'Restrições', description: 'Explicite limites, exclusões e critérios que a resposta deve respeitar.' }
    ,{ id: 'zero-shot', name: 'Zero-shot prompting', description: 'Peça a tarefa diretamente, sem exemplos, quando a instrução já for clara.' }
    ,{ id: 'self-consistency', name: 'Self-consistency', description: 'Compare caminhos de resposta para reduzir decisões frágeis em problemas de raciocínio.' }
    ,{ id: 'prompt-chaining', name: 'Prompt chaining', description: 'Divida um trabalho complexo em etapas conectadas e verificáveis.' }
    ,{ id: 'react', name: 'ReAct', description: 'Combine raciocínio orientado à tarefa com ações e observações de ferramentas.' }
    ,{ id: 'tree-of-thoughts', name: 'Tree of Thoughts', description: 'Explore alternativas em ramificações antes de escolher um caminho.' }
    ,{ id: 'rag', name: 'RAG', description: 'Use uma fonte recuperada para ancorar a resposta em conteúdo fornecido.' }
];
