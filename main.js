import { getRepos } from "./modules/data.js";

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