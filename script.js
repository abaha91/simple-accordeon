document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('accordion');
    const buttons = accordion.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            buttons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
            if (!isExpanded) {
                button.setAttribute('aria-expanded', 'true');
            }
        });

        button.addEventListener('keydown', function (e) {
            const key = e.key;
            const { previousElementSibling, nextElementSibling } = button.parentElement.parentElement;
            if (key === 'ArrowDown') {
                nextElementSibling?.querySelector('button').focus();
            } else if (key === 'ArrowUp') {
                previousElementSibling?.querySelector('button').focus();
            }
        });
    });
});
