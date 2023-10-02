document.addEventListener("DOMContentLoaded", () => {
    let signupButton = document.querySelectorAll('.sign-up-link');
    let signupDropdown = document.querySelectorAll('#sign-up');
    let main = document.querySelectorAll('main');
    main = main[0];
    signupDropdown = signupDropdown[0];
    signupButton = signupButton[0];
    signupButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (signupButton.classList.contains('close')) {
            signupButton.classList.remove('close');
            signupDropdown.classList.remove('open');
            main.classList.remove('open');
            signupButton.innerHTML = 'Sign up';
        } else {
            signupButton.classList.add('close');
            signupDropdown.classList.add('open');
            main.classList.add('open');
            signupButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
        }
    })
})