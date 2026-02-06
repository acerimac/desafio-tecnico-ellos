document.addEventListener('DOMContentLoaded', () => {
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
            const answer = question.querySelector('.duvidas-question-answer');
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
