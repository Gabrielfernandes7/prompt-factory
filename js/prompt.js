export function composePrompt(form, cotActive = false, fewShots = []) {
    const promptParts = [...form.querySelectorAll('textarea')]
        .map(field => ({ label: field.dataset.label, value: field.value.trim() }))
        .filter(field => field.value)
        .map(field => `${field.label}:\n${field.value}`);

    let finalPrompt = promptParts.join('\n\n');

    // Append few-shot examples if present
    if (fewShots && fewShots.length > 0) {
        const formattedFewShots = fewShots
            .map((shot, index) => {
                const inputVal = shot.input.trim();
                const outputVal = shot.output.trim();
                if (!inputVal && !outputVal) return '';
                return `[Exemplo ${index + 1}]\nEntrada:\n${inputVal}\nSaída:\n${outputVal}`;
            })
            .filter(Boolean)
            .join('\n\n');

        if (formattedFewShots) {
            finalPrompt += `\n\nExemplos de referência:\n${formattedFewShots}`;
        }
    }

    // Append Chain-of-Thought
    if (cotActive) {
        finalPrompt += `\n\nPense passo a passo para resolver o problema. Explique o raciocínio logicamente antes de apresentar a resposta final.`;
    }

    return finalPrompt.trim();
}
