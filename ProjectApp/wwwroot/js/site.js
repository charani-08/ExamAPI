// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const uri = " http://localhost:50884/api/Project"
let productlist = [];

function GetProjects() {
    fetch(uri, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },


    })
        .then(response => response.json())
        .then(data => _displayproductList(data))
        .catch(error => console.error('unable to get', error));
}

function addproject() {
    debugger;
    const project = {
       description: document.getElementById('ProjectDesc').value,
        IsDone: parseBool(document.getElementById('ProjectIsdone').value),
        
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
function UpdateItem() {
    debugger;
    const ProductId = document.getElementById('editProductId').value;
    const product = {
       description: document.getElementById('editdesc').value,
        IsDone: parseBool(document.getElementById('editIsDone').value),
        
    };


    fetch(`${uri}/${ProductId}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(product)

    })
        .then(() => GetProjects())
        .catch(error => console.error('Unable to Update', error));

    return false;
}

function displayEditForm(id) {
    const item = productlist.find(item => item.productId == id);

    document.getElementById('editproductId').value = item.productId;
    document.getElementById('editdesc').value = item.description;
    document.getElementById('editIsDone').value = item.isdone;
    
}
function deleteItem(id) {
    const item = productlist.find(item => item.productId == id);

    document.getElementById('deleteProductId').value = item.productId;
    document.getElementById('deletedesc').value = item.description;
    document.getElementById('deleteIsDone').value = item.isdone;
   

}
function DeleteItem() {
    debugger;
    const productId = document.getElementById('deleteProductlId').value;
    const equipment = {
        description: document.getElementById('deletedesc').value,
        IsDone: document.getElementById('deleteIsDone').value,
        
    };


    fetch(`${uri}/${productId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(product)

    })
        .then(() => GetProjects())
        .catch(error => console.error('Unable to Delete', error));

    return false;
}



function _displayproductList(data) {
    debugger;
    const tBody = document.getElementById('productlist');
    tBody.innerHTML = ' ';



    const button = document.createElement('button');

    data.forEach(item => {
        let lableforId = document.createElement('label');
        lableforId.innerHTML = item.producttId;

        let lablefordesc = document.createElement('label');
        lablefordesc.innerHTML = item.description;

        let lableforisdone= document.createElement('label');
        lableforisdone.innerHTML = item.isdone;

        


        let editbutton = button.cloneNode(false);
        editbutton.innerText = 'Edit';
        editbutton.setAttribute('onclick', `displayEditForm(${item.productId})`);

        let deletebutton = button.cloneNode(false);
        deletebutton.innerText = 'Delete';
        deletebutton.setAttribute('onclick', `deleteItem(${item.productId})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(lableforId);

        let td2 = tr.insertCell(1);
        td2.appendChild(lablefordesc);

        let td3 = tr.insertCell(2);
        td3.appendChild(lableforisdone);

       

        let td4 = tr.insertCell(3);
        td5.appendChild(editbutton);

        let td5 = tr.insertCell(4);
        td6.appendChild(deletebutton);


    });

   productlist = data;

}


