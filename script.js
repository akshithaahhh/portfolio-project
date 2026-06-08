fetch('/projects')
.then(res => res.json())
.then(data => {
    let output = "";

    data.forEach(project => {
        output += `<p>${project.name}</p>`;
    });

    document.getElementById("projects").innerHTML = output;
});