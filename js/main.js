var elList = document.querySelector('.js-list');
var elSelect = document.querySelector('.js-select');

function dom(array, node){
    for (poc of array) {
        var newItem = document.createElement('li');
        var img = document.createElement('img');
        var newTitle = document.createElement('h3');
        var newType = document.createElement('p');
        var weight = document.createElement('span');
        var newCount = document.createElement('span');
        
        weight.textContent = poc.weight;
        newCount.textContent = poc.egg;
        newType.textContent = poc.type;
        newTitle.textContent = poc.name;
        
        newCount.setAttribute('class', 'egg');
        weight.setAttribute('class', 'weight');
        newType.setAttribute('class', 'js-text');
        newTitle.setAttribute('class', 'js-title');
        newItem.setAttribute('class', 'item');
        img.setAttribute('src', poc.img);
        img.setAttribute('width', 170);
        img.setAttribute('width', 170);
        img.setAttribute('class', 'img');
        
        newItem.appendChild(img);
        newItem.appendChild(newTitle);
        newItem.appendChild(newType);
        newItem.appendChild(weight);
        newItem.appendChild(newCount);
        node.appendChild(newItem);
    }
}

dom(pokemons, elList)


let result = [];
elSelect.addEventListener('change', function () {
    
    elList.innerHTML = "";
    result = []
    
    let selectValue = elSelect.value
    
    pokemons.forEach((animal) => {
        if (animal.type.includes(selectValue)) {
            result.push(animal);
        }
    });
    
    dom(result, elList)
});



let elTest = document.querySelector(".js-select")
 
// function pic(arr){
//     let c = []

//     for (i of arr){
            
//         c.push(i.type[0])
        
//         var newIt = document.createElement('option');
        
//         newIt.textContent = i.type;
        
//         elTest.appendChild(newIt); 
//     }
    
//     console.log(new Set (c));
// }
//      pic(pokemons)





// console.log(option);



// let pocam =  new Set([])
// // for (i of pokemons){
// //     pocam.push(i.type) 
// // }

// let uniq = [new Set(pocam) ];


// console.log(uniq);