/* Small, dependency-free view helpers used by the application renderers. */
window.PromptFactoryComponents = {
    emptyState(title, message = '') {
        return `<div class="empty"><strong>${title}</strong>${message ? `<span>${message}</span>` : ''}</div>`;
    },
    sectionLabel(label) { return `<span class="section-label">${label}</span>`; },
    button(label, className = '', attrs = '') { return `<button class="btn ${className}" type="button" ${attrs}>${label}</button>`; }
};
