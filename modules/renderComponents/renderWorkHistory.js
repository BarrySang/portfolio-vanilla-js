export function renderWorkHistory(parentComponent, wHData) {
    wHData.forEach(data => {
        const wHComponent = document.createElement('div')
        wHComponent.setAttribute('class', 'whistory-component')
        wHComponent.innerHTML = `
            <p class='organization'>${data.organization}</p>
            <p class='position'>${data.position}</p>
            <p class='duration'>${data.duration}</p>
        `

        parentComponent.appendChild(wHComponent)
    })
}