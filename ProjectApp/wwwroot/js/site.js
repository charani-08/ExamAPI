// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const uri = " http://localhost:50884/api/Project"


function addproject() {
    debugger;
    const project = {
       description: document.getElementById('ProjectDesc').value,
        Isdone: (document.getElementById('ProjectIsDone').value),
        
    };
    

    fetch(uri, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(project)
    })
        .then(response => response.json())
        .then(() => {
            debugger;
            GetProjects();
            ///addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}



