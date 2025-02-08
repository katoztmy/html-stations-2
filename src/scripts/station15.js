function displayList() {
    const fruitsPList = document.querySelectorAll('p');
    let unko = document.createElement('ul');
    fruitsPList.forEach((fruit) => {
        const li = document.createElement('li')
        li.innerText = fruit.innerText
        unko.appendChild(li)
    })
    document.getElementById("fruits").innerHTML = ""
    document.getElementById("fruits").appendChild(unko)
}

