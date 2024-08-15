import { getAcademicData, getRepos, getWorkExperience } from "./modules/data.js";
import { renderAcademicData } from "./modules/renderComponents/renderAcademicData.js";
import { renderRepos } from "./modules/renderComponents/renderRepos.js";
import { renderWorkHistory } from "./modules/renderComponents/renderWorkHistory.js";

// render repos
const reposDataContainer = document.getElementById('g-r-data')
renderRepos(reposDataContainer)

// display academics data
const aHDataContainer = document.getElementById('a-h-data')
renderAcademicData(aHDataContainer, getAcademicData())

// display work history
const workHistoryContainer = document.getElementById('w-h-data')
renderWorkHistory(workHistoryContainer, getWorkExperience())

document.querySelectorAll('.parent-toggler').forEach(function(div) {
    div.addEventListener('click', function() {
        console.log('clicked')
        const content = this.nextElementSibling;
        content.classList.toggle('show'); // Toggle the 'show' class on the content
        this.classList.toggle('active'); // Optionally toggle an 'active' class on c-div
    });
});
