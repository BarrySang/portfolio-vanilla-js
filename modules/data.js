export function getRepos() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open("GET", 'https://api.github.com/users/BarrySang/repos', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    const response = JSON.parse(xhr.responseText); // Parse the response as JSON
                    resolve(response); // Resolve the promise with the response data
                } else {
                    reject(`Error: ${xhr.status}`); // Reject the promise if there was an error
                }
            }
        };

        xhr.send();
    });
}

export function getAcademicData() {
    return [
        {
            course: 'Bachelors Degree: Mechanical and Manufacturing Engineering',
            school: 'Multimedia University of Kenya',
            duration: '2018 - 2023'
        },
        {
            course: 'Certificate in Java Programming',
            school: 'East African Institute of Certified Studies',
            duration: 'July 2018 - August 2018'
        }
    ]
}

export function getWorkExperience() {
    return [
        {
            organization: 'DigitalSelf',
            position: 'Front End Web Developer',
            duration: ''
        },
        {
            organization: 'Studio48',
            position: 'Back-end Web Developer',
            duration: ''
        },
        {
            organization: 'Kapsabet Bible College',
            position: 'Volunteer Computer Teacher',
            duration: ''
        }
    ]
}