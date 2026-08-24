import { frameworks } from './data/frameworks.js';
import { useCases, useCaseCategories } from './data/use-cases.js';
import { techniques } from './data/techniques.js';
import { escapeHtml } from './ui.js';

export function createExplore({ categories, result, title, needs, recommendations, onBuild }) {
    function renderCategories() {
        categories.hidden = false;
        result.hidden = true;
        categories.innerHTML = Object.entries(useCaseCategories).map(([id, item]) => `<button class="category-card" data-category="${id}" type="button"><strong>${escapeHtml(item[0])}</strong><span>${escapeHtml(item[1])}</span></button>`).join('');
    }

    function renderUseCases(category) {
        const items = useCases.filter(item => item.category === category);
        categories.innerHTML = `<button class="back-link" data-explore-back type="button">← Todas as áreas</button>${items.map(item => `<button class="category-card template-card" data-use-case="${item.id}" type="button"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.intro)}</span></button>`).join('')}`;
    }

    function techniqueName(id) {
        return techniques.find(technique => technique.id === id)?.name || id;
    }

    function recommend(id) {
        const useCase = useCases.find(item => item.id === id);
        if (!useCase) return;
        const relatedKeys = [...new Set([
            useCase.framework,
            ...useCases.filter(item => item.category === useCase.category && item.framework !== useCase.framework).map(item => item.framework)
        ])].slice(0, 3);
        title.textContent = useCase.title;
        needs.textContent = `Necessidades identificadas: ${useCase.fields.map(field => field[0].toLowerCase()).join(', ')}. Técnicas úteis: ${useCase.techniques.map(techniqueName).join(', ')}.`;
        recommendations.innerHTML = relatedKeys.map((key, index) => {
            const framework = frameworks[key];
            const reason = index === 0
                ? `Recomendação principal: ${framework.best}`
                : `Alternativa para quando: ${framework.when}`;
            return `<article class="tech-card recommendation-card ${index === 0 ? 'active' : ''}"><span class="badge">${index === 0 ? 'Mais indicado' : 'Alternativa'}</span><h3>${escapeHtml(framework.short)}</h3><p>${escapeHtml(framework.what)}</p><div class="best"><strong>Por quê:</strong> ${escapeHtml(reason)}</div><button class="btn ${index === 0 ? 'primary' : ''}" data-build-framework="${key}" type="button">Construir com ${escapeHtml(framework.short)}</button></article>`;
        }).join('');
        categories.hidden = true;
        result.hidden = false;
        result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    categories.addEventListener('click', event => {
        const category = event.target.closest('[data-category]');
        const useCase = event.target.closest('[data-use-case]');
        if (category) renderUseCases(category.dataset.category);
        if (useCase) recommend(useCase.dataset.useCase);
        if (event.target.closest('[data-explore-back]')) renderCategories();
    });
    recommendations.addEventListener('click', event => {
        const button = event.target.closest('[data-build-framework]');
        if (button) onBuild(button.dataset.buildFramework);
    });

    renderCategories();
    return { restart: renderCategories };
}
