export const workflows = [
    {
        id: 'ooda',
        name: 'OODA',
        steps: 'Observe → Orient → Decide → Act',
        description: 'Organiza investigação e decisão em um ciclo baseado em fatos, hipóteses, escolha e experimento.',
        when: 'Use em debugging, pesquisa, análise de negócio e decisões de arquitetura.',
        instruction: 'Siga o workflow OODA:\n1. Observe: liste somente fatos observáveis.\n2. Orient: formule hipóteses apoiadas nesses fatos.\n3. Decide: escolha o caminho mais provável e justifique com evidências.\n4. Act: proponha a menor ação ou experimento capaz de validar a decisão.'
    },
    {
        id: 'react',
        name: 'ReAct',
        steps: 'Reason → Act → Observe',
        description: 'Alterna decisão operacional, uso de ferramentas e observação dos resultados.',
        when: 'Use apenas em tarefas com ferramentas, fontes externas ou ações verificáveis.',
        instruction: 'Trabalhe em ciclos ReAct: determine a próxima ação necessária, execute-a com a ferramenta apropriada, observe o resultado e use essa evidência para decidir a ação seguinte. Não invente resultados de ferramentas.'
    }
];
