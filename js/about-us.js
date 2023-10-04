document.addEventListener("DOMContentLoaded", () => {
    let aboutUsButton = document.querySelectorAll('.about-link');
    let aboutUsPage = document.querySelectorAll('#about-us');
    let signUpDropdown = document.querySelectorAll('#sign-up');
    let signUpButton = document.querySelectorAll('.sign-up-link');
    signUpButton = signUpButton[0];
    signUpDropdown = signUpDropdown[0];
    aboutUsPage = aboutUsPage[0];
    aboutUsButton = aboutUsButton[0];
    if (window.location.hash === '#about-us') {
        openAboutUs(aboutUsPage, aboutUsButton, signUpButton, signUpDropdown);
    } else {
        closeAboutUs(aboutUsPage, aboutUsButton, signUpButton, signUpDropdown);
    }
    aboutUsButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (aboutUsButton.classList.contains('close')) {
            closeAboutUs(aboutUsPage, aboutUsButton, signUpButton, signUpDropdown);
        } else {
            openAboutUs(aboutUsPage, aboutUsButton, signUpButton, signUpDropdown);
        }
    })
})

function openAboutUs(aboutUsPage, aboutUsButton, signUpButton, signUpDropdown) {
    let main = document.querySelectorAll('main');
    main = main[0];
    setTimeout(()=>{
        document.body.classList.add('about');
    }, 500);
    let floatingButton = document.querySelectorAll('#floating-social-button');
    floatingButton = floatingButton[0];
    floatingButton.style.display = 'none';
    window.location.hash="#about-us";
    aboutUsButton.classList.add('close');
    aboutUsPage.classList.add('open');
    signUpButton.innerHTML = '';
    main.classList.remove('open');
    signUpButton.classList.remove('close');
    signUpDropdown.classList.remove('open');
    aboutUsButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm175 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>';
}

function closeAboutUs(aboutUsPage, aboutUsButton, signUpButton) {
    window.location.hash="";
    setTimeout(()=>{
        document.body.classList.remove('about');
    }, 0);
    let floatingButton = document.querySelectorAll('#floating-social-button');
    floatingButton = floatingButton[0];
    floatingButton.style.display = 'grid';
    aboutUsButton.classList.remove('close');
    aboutUsPage.classList.remove('open');
    signUpButton.innerHTML = 'Rekisteröidy';
    aboutUsButton.innerHTML = 'Tietoa meistä';
}

function isPhone() {
    if (window.innerWidth <= 750) {
        return true;
    } else {
        return false;
    }
}