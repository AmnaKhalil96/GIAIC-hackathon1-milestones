var toggleButton = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skills');
toggleButton.addEventListener('click', function () {
    var currentDisplay = window.getComputedStyle(skillsSection).display;
    if (currentDisplay === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
