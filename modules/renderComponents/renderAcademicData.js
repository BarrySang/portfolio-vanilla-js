export function renderAcademicData(parentComponent, academicData) {
    academicData.forEach(data => {
        const aDComponent = document.createElement('div')
        aDComponent.setAttribute('class', 'academic-component')
        aDComponent.innerHTML = `
            <p class='course'>${data.course}</p>
            <p class='school'>${data.school}</p>
            <p class='duration'>${data.duration}</p>
        `
    
        parentComponent.appendChild(aDComponent)
    })
}

