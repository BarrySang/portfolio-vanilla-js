export function renderError(parentComponent, error) {
    console.error(error);
    const errorComponent = document.createElement('div')
    errorComponent.setAttribute('class', 'error-component')
    errorComponent.innerHTML = `
        
        <p>An error occured, please reload the page.</p>
        <h1 class=''>Error details</h1>
        <div class='error-details'>
            <p>${error}</p>
        </div>
    `

    parentComponent.appendChild(errorComponent)
}