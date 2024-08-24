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

let carets = document.querySelectorAll('.caret-element')

carets.forEach(caret => {
    caret.classList.add('mobile-show')
})

document.querySelectorAll('.parent-toggler').forEach(function(div) {
    div.addEventListener('click', function() {
        const content = this.nextElementSibling;
        
        const caretDown = document.querySelectorAll('.caret-down')


        // display content
        content.classList.toggle('show'); // Toggle the 'show' class on the content
        const caret = this.querySelector('.caret-element')
        

        caret.classList.toggle('mobile-opened')
        caret.classList.toggle('mobile-opened-closed')

        this.classList.toggle('active'); // Optionally toggle an 'active' class on c-div
    });
});

// when parent toggler is clicked, add 'mobile-show' class to caret-right, and remove 'mobile-show' from caret-down

// document.querySelectorAll('.profile-element-icon').forEach((iconElement) => {
// iconElement.addEventListener('click', function() {
//     const content = this.nextElementSibling
//     console.log(content)

//     content.classList.toggle('show')
// })
// })
