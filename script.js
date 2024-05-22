document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const output = document.querySelector('.output');

    const commands = {
        'dominik help': 'Available commands: dominik experience, dominik skills, clear',
        'dominik experience': 'Experience: 5 years in software development...',
        'dominik skills': 'Skills: JavaScript, Python, CSS, HTML...',
        'clear': ''
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = input.value;
            const response = commands[command] || 'Command not found';

            if (command === 'clear') {
                output.innerHTML = '';
            } else {
                output.innerHTML += `<pre>${document.querySelector('.prompt').textContent} ${command}</pre>`;
                output.innerHTML += `<pre>${response}</pre>`;
            }

            input.value = '';
            output.scrollTop = output.scrollHeight;
        }
    });

    // Change color of '~' sign in input line to blue
    input.addEventListener('input', () => {
        const prompt = document.querySelector('.prompt');
        const inputText = input.value;
        const modifiedPrompt = prompt.textContent.replace('~', '<span class="blue-sign">~</span>');
        prompt.innerHTML = modifiedPrompt;
    });
});

