# Prompt Factory — Documentação de Produto

## 1. Visão

**Prompt Factory** é uma ferramenta de aprendizado, estruturação, construção, organização e reutilização de prompts.

A proposta central é ajudar o usuário a transformar uma intenção em um prompt estruturado por meio de frameworks, técnicas e orientações de engenharia de prompts.

O Prompt Factory **não escreve o prompt pelo usuário**. O usuário continua responsável pelo conteúdo; o sistema fornece estrutura, conhecimento e orientação.

> **Princípio central:** guiar o usuário a construir prompts melhores enquanto ele os constrói.

---

## 2. Problema

Usuários de modelos de linguagem frequentemente sabem o que desejam obter, mas têm dificuldade para transformar essa intenção em uma instrução clara.

Problemas recorrentes:

- falta de contexto;
- objetivos pouco claros;
- mistura entre tarefa, contexto, restrições e formato;
- ausência de critérios ou limites;
- dificuldade para escolher uma estrutura adequada;
- desconhecimento sobre frameworks de prompting;
- dificuldade para reutilizar prompts úteis;
- prompts armazenados sem organização;
- dependência de geradores automáticos sem compreender a estrutura criada.

## 3. Hipótese do produto

> Dividir a construção de prompts em componentes compreensíveis e orientar a escolha de estruturas de acordo com a intenção reduz a dificuldade de produzir prompts claros e reutilizáveis.

Essa é uma hipótese de produto e deve ser validada com usuários.

---

## 4. Objetivos

### Objetivo principal

Reduzir a dificuldade de transformar uma intenção em um prompt estruturado.

### Objetivos secundários

- ensinar frameworks de prompting;
- explicar para que cada framework serve;
- orientar quando utilizar cada abordagem;
- tornar explícitas as partes de um prompt;
- ajudar na escolha da estrutura;
- permitir frameworks e técnicas complementares;
- permitir aprendizado progressivo;
- preservar o controle autoral do usuário.

### Não objetivo

O Prompt Factory não garante que determinado framework produzirá necessariamente uma resposta melhor. Ele melhora a estruturação da solicitação; o resultado depende também do modelo, problema e informações fornecidas.

---

## 5. Princípios do produto

**P01 — O usuário escreve.** O sistema orienta e estrutura, mas não substitui seu raciocínio.

**P02 — Explicar antes de exigir.** Todo componente deve possuir explicação sobre sua finalidade.

**P03 — Complexidade progressiva.** Iniciantes devem conseguir começar por estruturas simples.

**P04 — Framework não é técnica.** Frameworks estruturam o prompt; técnicas complementares enriquecem a estratégia.

**P05 — Workflow não é framework.** Workflows organizam ciclos de investigação, decisão e ação e podem ser combinados com uma estrutura e técnicas.

**P06 — Exemplos ensinam, não preenchem.** Exemplos e placeholders nunca entram automaticamente no conteúdo.

**P07 — O conteúdo pertence ao usuário.** O sistema não persiste nem reutiliza o conteúdo no MVP.

**P08 — Estrutura visível.** O usuário deve entender de onde cada parte do prompt final surgiu.

**P09 — Recomendações explicáveis.** Toda recomendação deve informar por que determinada abordagem é adequada.

### Catálogo inicial do MVP

- **Frameworks:** CTF, RTF, RISEN, CO-STAR e CRISPE;
- **Técnicas:** Few-shot, Decomposition, Constraints, Output Specification, Reflection e Step-back;
- **Workflows:** OODA e ReAct.

O Builder deve permitir a composição `framework + técnicas + workflow` sem preencher silenciosamente o conteúdo principal do usuário. O workflow é opcional e apenas um pode ser aplicado por vez, evitando instruções operacionais concorrentes.

---

## 6. Usuários

### Iniciante
> “Sei o que quero pedir, mas não sei estruturar um bom prompt.”

### Intermediário
> “Conheço algumas técnicas, mas quero estruturar e organizar melhor meus prompts.”

### Avançado
> “Quero escolher estruturas, combinar técnicas e manter uma biblioteca reutilizável.”

---

## 7. Linguagem do domínio

Os conceitos centrais são:

1. Intenção
2. Necessidade
3. Framework
4. Componente
5. Técnica
6. Adequação
7. Template
8. Prompt

Eles possuem responsabilidades distintas e não devem ser tratados como equivalentes.

---

## 8. Intenção

Uma **Intenção** representa aquilo que o usuário pretende alcançar.

Ela responde:

> **O que eu quero fazer?**

Exemplos:

- analisar;
- criar;
- explicar;
- comparar;
- transformar;
- planejar;
- resolver;
- extrair;
- classificar;
- resumir;
- revisar;
- tomar uma decisão;
- controlar estilo e tom;
- controlar formato;
- executar uma tarefa complexa.

Fluxo:

```text
Necessidade do usuário
        ↓
     Intenção
        ↓
   Necessidades
        ↓
     Adequação
        ↓
Frameworks + Técnicas
        ↓
      Builder
        ↓
       Prompt
```

---

## 9. Necessidade

Uma intenção pode possuir características que refinam a orientação.

Exemplos:

- simplicidade;
- contexto detalhado;
- múltiplas etapas;
- restrições;
- estilo;
- tom;
- audiência;
- formato rigoroso;
- exemplos;
- critérios de qualidade.

Exemplo:

```text
Intenção: Criar conteúdo

Necessidades:
✓ audiência
✓ estilo
✓ tom
✓ formato
```

---

## 10. Framework

Um **Framework** é uma estrutura usada para organizar componentes de um prompt.

Exemplos:

- RTF;
- CTF;
- RISEN;
- CO-STAR.

Modelo conceitual:

```text
Framework
- id
- nome
- sigla
- descrição
- finalidade
- quandoUsar
- dificuldade
- componentes[]
- intençõesRelacionadas[]
```

Cada framework deve responder:

> **O que é → Para que serve → Quando usar → Como preencher → Exemplo**

Também deve informar:

- intenções adequadas;
- situações em que é menos indicado;
- complexidade;
- justificativa de recomendação.

---

## 11. Componente

Um **Componente** representa uma parte conceitual de um framework.

```text
CO-STAR
├── Context
├── Objective
├── Style
├── Tone
├── Audience
└── Response
```

Modelo:

```text
Component
- id
- nome
- descrição
- orientação
- exemplo
- posição
- obrigatório
```

---

## 12. Técnica

Uma **Técnica** é uma estratégia complementar que pode ser utilizada dentro de diferentes estruturas.

Exemplo:

```text
Framework: CO-STAR
+
Técnica: Few-shot
```

Modelo:

```text
Technique
- id
- nome
- descrição
- finalidade
- quandoUsar
- exemplo
- intençõesRelacionadas[]
```

Conceitualmente:

```text
Estrutura base + técnicas complementares
```

---

## 13. Adequação

Intenções e frameworks possuem relacionamento muitos-para-muitos.

A associação deve carregar a justificativa:

```text
FrameworkIntention
- framework
- intention
- adequação
- justificativa
```

Exemplo:

```text
Intenção: Criar conteúdo

RTF
Adequação: BOA
Motivo: útil quando papel, tarefa e formato são suficientes.

CO-STAR
Adequação: EXCELENTE
Motivo: apropriado quando contexto, estilo, tom, audiência
e resposta precisam ser explicitamente controlados.

RISEN
Adequação: BOA
Motivo: apropriado quando existem instruções,
etapas e restrições detalhadas.
```

Uma recomendação nunca deve existir apenas como uma pontuação sem explicação.

---

## 14. Template

Um **Template** é um ponto de partida para um problema recorrente.

Framework e template são conceitos diferentes.

```text
Template: Revisão de código
Categoria: Desenvolvimento
Framework: RISEN
```

Modelo:

```text
Template
- id
- nome
- descrição
- categoria
- framework
- estruturaInicial
```

Possíveis categorias:

```text
Desenvolvimento
├── Code Review
├── Debugging
├── Refatoração
└── Documentação

Estudos
├── Explicar conceito
├── Criar exercícios
├── Resumir conteúdo
└── Plano de estudos

Negócios
├── Análise de concorrentes
├── Pesquisa de mercado
├── Brainstorming
└── Planejamento
```

---

## 15. Prompt

Um **Prompt** é uma construção pertencente ao usuário.

```text
Prompt
- id
- nome
- frameworkId
- frameworkVersion
- componentesPreenchidos
- técnicas[]
- categoria
- favorito
- criadoEm
- atualizadoEm
```

O texto final não deve ser a única fonte de verdade.

A estrutura original deve ser preservada:

```text
Role:
"Desenvolvedor Java sênior"

Task:
"Revise este código..."

Format:
"Liste os problemas..."
```

Fluxo:

```text
Componentes preenchidos
        ↓
     Composição
        ↓
    Prompt final
```

---

## 16. Builder

O **Builder** é a área de construção.

Responsabilidades:

- selecionar estrutura;
- apresentar componentes;
- explicar componentes;
- receber conteúdo;
- mostrar exemplos;
- mostrar a anatomia;
- compor o resultado.

O Builder não decide o conteúdo pelo usuário.

---

## 17. Biblioteca

A **Biblioteca** é a área de aprendizado, descoberta e orientação.

Ela possui dois modos principais.

### Explorar por estrutura

```text
Frameworks
├── RTF
├── CTF
├── RISEN
└── CO-STAR

Técnicas
├── Few-shot
├── Decomposição
└── ...
```

### Explorar por intenção

```text
O que você quer fazer?

[ Criar       ]
[ Analisar    ]
[ Explicar    ]
[ Comparar    ]
[ Planejar    ]
[ Transformar ]
[ Extrair     ]
[ Revisar     ]
```

Exemplo:

```text
"Quero analisar um contrato."
        ↓
Intenção: Analisar
        ↓
Necessidades:
- contexto
- critérios
- restrições
- formato estruturado
        ↓
Frameworks adequados
        ↓
Técnicas complementares
```

A Biblioteca não decide pelo usuário. Ela apresenta possibilidades e explica sua adequação.

---

## 18. Sistema de orientação

O Prompt Factory deve evoluir de catálogo para **sistema de orientação**.

```text
Intenção
+
Necessidades
        ↓
Regras de adequação
        ↓
Frameworks recomendados
+
Técnicas complementares
        ↓
Justificativas
```

Exemplo:

```text
Quero: CRIAR CONTEÚDO

Preciso controlar:
✓ audiência
✓ estilo
✓ tom
✓ formato

Sugestões:

1. CO-STAR — Excelente
2. RISEN   — Boa
3. RTF     — Básica
```

As recomendações devem ser determinísticas e explicáveis.

---

## 19. Biblioteca pessoal

Fora do escopo do MVP. O produto não salva, edita, duplica, exclui, importa ou exporta prompts.

---

## 20. Anatomia do Prompt

O Prompt Factory deve permitir visualizar estruturalmente a construção:

```text
[CONTEXTO]
Estou desenvolvendo...

[OBJETIVO]
Quero descobrir...

[RESTRIÇÕES]
Não utilize...

[FORMATO]
Retorne uma tabela...
```

Isso permite que o usuário compreenda como sua instrução foi construída.

---

## 21. Diagnóstico estrutural

Uma evolução prevista é uma revisão manual da estrutura:

```text
Contexto definido?              ✓
Objetivo claro?                 ✓
Formato especificado?           ✗
Restrições definidas?           ✗
Público definido?               ✓
Exemplos fornecidos?            ✗
Critérios de qualidade?         ✗
```

O diagnóstico não deve declarar automaticamente que um prompt é “bom” ou “ruim”. Ele deve estimular reflexão.

---

## 22. Subdomínios

```text
PROMPT FACTORY
│
├── Conhecimento
│   ├── Frameworks
│   ├── Técnicas
│   ├── Intenções
│   └── Guias
│
├── Orientação
│   ├── Intenção
│   ├── Necessidades
│   ├── Adequação
│   └── Recomendações
│
├── Construção
│   ├── Builder
│   ├── Componentes
│   ├── Anatomia
│   └── Preview
│
```

---

## 23. Casos de uso

### MVP

- **UC01 — Explorar frameworks por intenção**
- **UC02 — Informar necessidades**
- **UC03 — Receber recomendações explicadas**
- **UC04 — Consultar framework e seus componentes**
- **UC05 — Selecionar framework**
- **UC06 — Construir prompt**
- **UC07 — Visualizar prompt em tempo real**
- **UC08 — Copiar prompt**
- **UC09 — Consultar técnicas complementares**

---

## 24. Regras de negócio

- **RN01** — Todo framework deve possuir pelo menos um componente.
- **RN02** — Componentes possuem ordem definida.
- **RN03** — Exemplos e placeholders nunca entram automaticamente no conteúdo.
- **RN04** — Alterar o framework não pode descartar conteúdo silenciosamente.
- **RN12** — Frameworks e técnicas são conceitos distintos.
- **RN13** — Uma intenção pode estar relacionada a múltiplos frameworks.
- **RN14** — Um framework pode atender múltiplas intenções.
- **RN15** — Recomendações devem possuir justificativa.
- **RN16** — O sistema não deve escrever componentes em nome do usuário.
- **RN17** — Ausência de um componente não significa automaticamente inadequação.
- **RN18** — Adequação representa orientação, não garantia de qualidade.

---

## 25. Requisitos funcionais

- **RF01** — Consultar frameworks disponíveis.
- **RF02** — Consultar finalidade e orientação de cada framework.
- **RF03** — Consultar intenções relacionadas.
- **RF04** — Selecionar framework.
- **RF05** — Visualizar seus componentes.
- **RF06** — Consultar orientação individual de cada componente.
- **RF07** — Preencher componentes individualmente.
- **RF08** — Compor representação final.
- **RF09** — Atualizar a representação conforme alterações.
- **RF15** — Copiar representação final.
- **RF18** — Explorar frameworks por intenção.
- **RF19** — Apresentar frameworks relacionados à intenção.
- **RF20** — Justificar recomendações.
- **RF21** — Refinar orientação por necessidades.
- **RF22** — Distinguir frameworks de técnicas.
- **RF23** — Informar situações em que um framework é menos indicado.

---

## 26. Atributos de qualidade

### Usabilidade
O usuário deve conseguir iniciar uma construção sem conhecer previamente a nomenclatura dos frameworks.

### Aprendibilidade
O uso deve ensinar progressivamente o significado das estruturas.

### Modificabilidade
Adicionar um framework não deve exigir alterar o comportamento fundamental do Builder.

### Extensibilidade
Novas intenções, técnicas, templates e relações devem poder ser incorporadas sem redefinir conceitos centrais.

### Confiabilidade
Operações destrutivas não devem provocar perda silenciosa de conteúdo.

### Desempenho percebido
Alterações durante a construção devem ser refletidas imediatamente.

### Privacidade
O conteúdo criado deve permanecer sob controle do usuário dentro do escopo do produto.

### Explicabilidade
Recomendações devem apresentar motivos compreensíveis.

---

## 27. Escopo

### Dentro do escopo

- biblioteca de frameworks;
- biblioteca de técnicas;
- explicações;
- orientação por intenção;
- construção estruturada;
- preview;
- anatomia;
- templates;
- categorias;
- busca;

### Fora do escopo inicial

- biblioteca pessoal e persistência;
- salvar, editar, duplicar e excluir prompts;
- importação/exportação;

- executar prompts em modelos;
- chatbot;
- geração automática de prompts;
- avaliação automática de respostas;
- agentes;
- marketplace;
- colaboração;
- contas;
- sincronização entre dispositivos;
- compartilhamento social;
- automações.

Esses itens podem ser reavaliados futuramente, mas não fazem parte da proposta central atual.

---

## 28. Fluxos principais

### Usuário conhece o framework

```text
Explorar
   ↓
Framework
   ↓
Entender
   ↓
Usar no Builder
   ↓
Preencher
   ↓
Revisar
   ↓
Copiar
```

### Usuário conhece apenas sua necessidade

```text
"O que você quer fazer?"
          ↓
       Intenção
          ↓
     Necessidades
          ↓
      Orientação
          ↓
Frameworks + Técnicas
          ↓
        Builder
          ↓
        Prompt
```

---

## 29. Roadmap conceitual

### Fase 1 — Fundação

- Builder;
- frameworks;
- explicações;
- preview;

### Fase 2 — Descoberta

- intenções;
- adequação;
- orientação;
- busca;
- categorias;
- favoritos.

### Fase 3 — Composição

- técnicas complementares;
- templates;
- framework + técnica;
- anatomia aprimorada.

### Fase 4 — Aprendizado

- diagnóstico estrutural;
- comparação de estruturas;
- guias;
- histórico e versionamento.

A evolução deve seguir necessidades validadas, evitando funcionalidades adicionadas apenas porque são tecnicamente possíveis.

---

## 30. Modelo consolidado

```text
                       USUÁRIO
                          │
                  "O que quero fazer?"
                          │
                          ▼
                       INTENÇÃO
                          │
                 "O que é importante?"
                          │
                          ▼
                     NECESSIDADES
                          │
                          ▼
                      ADEQUAÇÃO
                     /         \
                    ▼           ▼
              FRAMEWORK      TÉCNICAS
                    \           /
                     \         /
                      ▼       ▼
                       BUILDER
                          │
                    COMPONENTES
                          │
                          ▼
                   ANATOMIA/PREVIEW
                          │
                          ▼
                        PROMPT
```

---

## 31. Definição resumida

> **Prompt Factory é um ambiente para aprender, descobrir, estruturar e construir prompts de forma consciente. Ele conecta a intenção do usuário a frameworks e técnicas adequados, explica o motivo das recomendações e orienta a construção sem substituir o usuário na escrita do conteúdo.**

O diferencial do produto não é gerar prompts automaticamente.

O diferencial é transformar engenharia de prompts em um processo **compreensível, estruturado e orientado**.
