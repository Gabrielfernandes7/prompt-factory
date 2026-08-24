export function composePrompt(form) {
    return [...form.querySelectorAll('textarea')]
        .map(field => ({ label: field.dataset.label, value: field.value.trim() }))
        .filter(field => field.value)
        .map(field => `${field.label}:\n${field.value}`)
        .join('\n\n');
}
