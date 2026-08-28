export function composePrompt(form, selectedTechniques = [], selectedWorkflow = null, fewShots = []) {
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

    const techniqueInstructions = selectedTechniques.map(technique => technique.instruction).filter(Boolean);
    if (techniqueInstructions.length) {
        finalPrompt += `\n\nTécnicas complementares:\n${techniqueInstructions.map(instruction => `- ${instruction}`).join('\n')}`;
    }

    if (selectedWorkflow) {
        finalPrompt += `\n\nWorkflow:\n${selectedWorkflow.instruction}`;
    }

    return finalPrompt.trim();
}
