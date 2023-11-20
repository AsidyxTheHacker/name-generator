let container = document.getElementById('container');
let nameContainer = document.createElement('div');
nameContainer.id = 'nameContainer';
container.appendChild(nameContainer);

for(i = 0; i < 3; i++){
    let childContainer = document.createElement('div');
    let nameText = document.createElement('p');
    childContainer.id = 'childContainer';
    nameText.innerText = 'poopydoopy'
    nameContainer.appendChild(childContainer);
    childContainer.appendChild(nameText).classList.add('commonText');
}

let textOne = document.querySelector('#nameContainer div:nth-child(1) p.commonText');
let textTwo = document.querySelector('#nameContainer div:nth-child(2) p.commonText');
let textThree = document.querySelector('#nameContainer div:nth-child(3) p.commonText');