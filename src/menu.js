

function createMenu(){
    const menu = document.createElement('section')
    menu.classList.add('menu')

    const header = document.createElement('h1')
    header.textContent = "Menu"
    menu.appendChild(header)

    const container = document.createElement('div')
    container.classList.add('menu-container')
    container.appendChild(createMenuItem('Cheezy Pizza','../images/pizza.jpg'))
    container.appendChild(createMenuItem('Chicken Biryani',  '../images/biryani.jpg'))
    container.appendChild(createMenuItem('Vagetable Salad', '../images/salad.jpg'))
    container.appendChild(createMenuItem('Beef Steak', '../images/steak.jpg'))
    container.appendChild(createMenuItem('Breakfast Set','../images/breakfast.jpg'))

    menu.appendChild(container)

    return menu

}

function createMenuItem(menu, imgSrc){
        const card = document.createElement('div')
        card.classList.add('menu-card')

        const image = document.createElement('img')
        const desc =  document.createElement('p')

        image.src = imgSrc
        card.appendChild(image)

        desc.textContent = menu
        card.appendChild(desc)

        return card
}

function loadMenu(){
    const main = document.querySelector('.main')
    main.textContent = ""
    main.appendChild(createMenu())
}


export default loadMenu
