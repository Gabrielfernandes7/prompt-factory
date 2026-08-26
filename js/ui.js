export const $ = selector => document.querySelector(selector);

export function escapeHtml(value = '') {
    return String(value).replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[character]));
}

export function createToast(element) {
    return message => {
        element.textContent = message;
        element.classList.add('show');
        clearTimeout(createToast.timeout);
        createToast.timeout = setTimeout(() => element.classList.remove('show'), 1800);
    };
}

export async function copyText(text, toast) {
    if (!text) return toast('Não há conteúdo para copiar.');
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
    }
    toast('Prompt copiado.');
}

export function initializeTheme(button) {
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let theme = preferredDark ? 'dark' : 'light';
    const apply = () => {
        document.documentElement.dataset.theme = theme;
        button.setAttribute('aria-label', `Alternar tema. Tema atual: ${theme === 'dark' ? 'escuro' : 'claro'}`);
    };
    apply();
    button.addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        apply();
    });
}

export function showMode(mode) {
    document.body.classList.toggle('mode-explore', mode === 'explore');
    document.body.classList.toggle('mode-build', mode === 'build');
    document.body.classList.toggle('mode-library', mode === 'library');
    document.querySelectorAll('.mode-tab').forEach(tab => {
        const active = tab.dataset.mode === mode;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
    });
}
