import { getRepos } from "../data.js";
import { renderError } from "./renderError.js";

export function renderRepos(parentComponent) {
    // display repositories
getRepos().then(repos => {
    repos.forEach(repository => {
        const repoComponent = document.createElement('div')
        repoComponent.setAttribute('id', repository.name)
        repoComponent.setAttribute('class', 'repo-component')
        repoComponent.innerHTML = `
            <p>${repository.name}</p>
        `
        
        parentComponent.appendChild(repoComponent)
    })
}).catch(error => {
    renderError(parentComponent, error)
});
}