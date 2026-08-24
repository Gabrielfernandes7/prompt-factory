/* Persistence boundary: the UI does not need to know how localStorage works. */
window.PromptFactoryStorage = (() => {
    const key = 'prompt-factory-library-v1';
    const legacyKey = 'prompt-builder-library-v1';
    function read() {
        try { return JSON.parse(localStorage.getItem(key)) || JSON.parse(localStorage.getItem(legacyKey)) || []; }
        catch { return []; }
    }
    function write(prompts) { localStorage.setItem(key, JSON.stringify(prompts)); }
    return { read, write, key };
})();
