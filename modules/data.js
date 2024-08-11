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