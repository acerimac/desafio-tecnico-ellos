document.addEventListener('DOMContentLoaded', () => {
    const header_container = document.querySelector('.header-container');
    const menu_toggle = document.querySelector('.header-menu-toggle');
    const header_nav = document.getElementById('header-nav');

    if (menu_toggle && header_container && header_nav) {
        menu_toggle.addEventListener('click', () => {
            const is_open = header_container.classList.toggle('menu-open');
            menu_toggle.setAttribute('aria-expanded', is_open);
            menu_toggle.setAttribute('aria-label', is_open ? 'Fechar menu' : 'Abrir menu');
        });

        header_nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                header_container.classList.remove('menu-open');
                menu_toggle.setAttribute('aria-expanded', 'false');
                menu_toggle.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }

    const triggers = document.querySelectorAll('.duvidas-question-trigger');

    function closeQuestion(question) {
        const trigger = question.querySelector('.duvidas-question-trigger');
        const answer = question.querySelector('.duvidas-question-answer');
        const icon = question.querySelector('.duvidas-question-icon');
        question.classList.remove('is-open');
        answer.setAttribute('aria-hidden', 'true');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        if (icon) icon.textContent = '+';
    }

    function openQuestion(question) {
        const trigger = question.querySelector('.duvidas-question-trigger');
        const answer = question.querySelector('.duvidas-question-answer');
        const icon = question.querySelector('.duvidas-question-icon');
        question.classList.add('is-open');
        answer.setAttribute('aria-hidden', 'false');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
        if (icon) icon.textContent = '−';
    }

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            const question = trigger.closest('.duvidas-question');
            const isOpen = question.classList.contains('is-open');

            if (isOpen) {
                closeQuestion(question);
            } else {
                document.querySelectorAll('.duvidas-question.is-open').forEach(closeQuestion);
                openQuestion(question);
            }
        });
    });
});
