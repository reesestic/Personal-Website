document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('theme-button');
    const courseworkText = document.getElementById('theme-view-coursework-text');
    const schoolHeading = document.querySelector('.theme-school-text');
    const buCards = document.querySelector('.theme-bu-cards');
    const clemsonCards = document.querySelector('.theme-clemson-cards');
    const buttonImage = toggleButton.querySelector('img');

    // 🟢 Set default layout: BU
    body.classList.remove('theme-clemson');
    body.classList.add('theme-bu');
    buCards.style.display = 'flex';
    clemsonCards.style.display = 'none';
    courseworkText.textContent = 'View Clemson Coursework (Freshman Year):';
    schoolHeading.textContent = 'Courses taken at Boston University (6)';
    buttonImage.src = 'clemson-logo.png';
    buttonImage.alt = 'Clemson Logo';

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('theme-bu')) {
        // Switch to Clemson
        body.classList.remove('theme-bu');
        body.classList.add('theme-clemson');

        courseworkText.textContent = 'View BU Coursework:';
        schoolHeading.textContent = 'Courses taken at Clemson University (4)';
        buCards.style.display = 'none';
        clemsonCards.style.display = 'flex';
        buttonImage.src = 'bu-logo.png';
        buttonImage.alt = 'BU Logo';
        } 
        else {
            // Switch to BU
            body.classList.remove('theme-clemson');
            body.classList.add('theme-bu');

            courseworkText.textContent = 'View Clemson Coursework (Freshman Year):';
            schoolHeading.textContent = 'Courses taken at Boston University (6)';
            clemsonCards.style.display = 'none';
            buCards.style.display = 'flex';
            buttonImage.src = 'clemson-logo.png';
            buttonImage.alt = 'Clemson Logo';
        }
    });
});