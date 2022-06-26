var elList = document.querySelector(".js-list")




for(poc of pokemons){

    var newItem = document.createElement("li")
    var img = document.createElement("img")
    var newTitle = document.createElement("h3")
    var newType = document.createElement("p")
    var weight = document.createElement("span")
    var newCount = document.createElement("span")


    weight.textContent = poc.weight
    newCount.textContent = poc.egg
    newType.textContent = poc.type
    newTitle.textContent = poc.name


    newCount.setAttribute("class", "egg")
    weight.setAttribute("class", "weight")
    newType.setAttribute("class", "js-text")
    newTitle.setAttribute("class", "js-title")
    newItem.setAttribute("class", "item")
    img.setAttribute("src", poc.img)
    img.setAttribute("width", 170)
    img.setAttribute("width", 170)
    img.setAttribute("class", "img" )


    
    newItem.appendChild(img)
    newItem.appendChild(newTitle)
    newItem.appendChild(newType)
    newItem.appendChild(weight)
    newItem.appendChild(newCount)
    elList.appendChild(newItem)


} 