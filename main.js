import { getAcademicData, getRepos } from "./modules/data.js";

const reposContainer = document.getElementById('github-repos')

// display repositories
getRepos().then(repos => {
    repos.forEach(repository => {
        const repoComponent = document.createElement('div')
        repoComponent.setAttribute('id', repository.name)
        repoComponent.setAttribute('class', 'repo-component')
        repoComponent.innerHTML = `
            <p>${repository.name}</p>
        `
        
        reposContainer.appendChild(repoComponent)
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

const academicHistory = document.getElementById('academic-history')

academicData.forEach(data => {
    const aDComponent = document.createElement('div')
    aDComponent.setAttribute('class', 'academic-component')
    aDComponent.innerHTML = `
        <p class='course'>${data.course}</p>
        <p class='school'>${data.school}</p>
        <p class='duration'>${data.duration}</p>
    `

    academicHistory.appendChild(aDComponent)
})