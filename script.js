let container = document.getElementById('container');
let nameContainer = document.createElement('div');
nameContainer.id = 'nameContainer';
container.appendChild(nameContainer);

for(i = 0; i < 3; i++){
    let childContainer = document.createElement('div');
    let nameInput = document.createElement('input');
    let nameText = document.createElement('p');
    let nameBtn = document.createElement('button');
    childContainer.id = 'childContainer';
    nameText.innerText = 'poopydoopy'
    nameBtn.innerText = 'Enter';
    nameContainer.appendChild(childContainer);
    childContainer.appendChild(nameInput);
    childContainer.appendChild(nameText);
    childContainer.appendChild(nameBtn);
}