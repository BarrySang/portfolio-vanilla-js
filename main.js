import { getAcademicData, getRepos, getWorkExperience } from "./modules/data.js";

const reposDataContainer = document.getElementById('g-r-data')

// display repositories
getRepos().then(repos => {
    repos.forEach(repository => {
        const repoComponent = document.createElement('div')
        repoComponent.setAttribute('id', repository.name)
        repoComponent.setAttribute('class', 'repo-component')
        repoComponent.innerHTML = `
            <p>${repository.name}</p>
        `
        
        reposDataContainer.appendChild(repoComponent)
    })
}).catch(error => {
    console.error(error);
    const errorComponent = document.createElement('div')
    errorComponent.setAttribute('class', 'error-component')
    errorComponent.innerHTML = `
        <p>An error occured, please reload the page.</p>
    `

    reposContainer.appendChild(errorComponent)
});

// display academics data
const academicData = getAcademicData()

const aHDataContainer = document.getElementById('a-h-data')

academicData.forEach(data => {
    const aDComponent = document.createElement('div')
    aDComponent.setAttribute('class', 'academic-component')
    aDComponent.innerHTML = `
        <p class='course'>${data.course}</p>
        <p class='school'>${data.school}</p>
        <p class='duration'>${data.duration}</p>
    `

    aHDataContainer.appendChild(aDComponent)
})

// display work history
const workHistoryContainer = document.getElementById('w-h-data')

const wHData = getWorkExperience()

wHData.forEach(data => {
    const wHComponent = document.createElement('div')
    wHComponent.setAttribute('class', 'whistory-component')
    wHComponent.innerHTML = `
        <p class='organization'>${data.organization}</p>
        <p class='position'>${data.position}</p>
        <p class='duration'>${data.duration}</p>
    `

    workHistoryContainer.appendChild(wHComponent)
})

document.querySelectorAll('.section-item-title').forEach(function(div) {
    div.addEventListener('click', function() {
        console.log('clicked')
        const content = this.nextElementSibling;
        content.classList.toggle('show'); // Toggle the 'show' class on the content
        this.classList.toggle('active'); // Optionally toggle an 'active' class on c-div
    });
});
