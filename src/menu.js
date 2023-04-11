import pizza from '../images/pizza.jpg'
import biryani from '../images/biryani.jpg'
import salad from '../images/salad.jpg'
import steak from '../images/steak.jpg'
import breakfast from '../images/breakfast.jpg'

function createMenu(){
    const menu = document.createElement('section')
    menu.classList.add('menu')

    const header = document.createElement('h1')
    header.textContent = "Menu"
    menu.appendChild(header)

    const container = document.createElement('div')
    container.classList.add('menu-container')
    container.appendChild(createMenuItem('Cheezy Pizza', pizza))
    container.appendChild(createMenuItem('Chicken Biryani',  biryani))
    container.appendChild(createMenuItem('Vagetable Salad', salad))
    container.appendChild(createMenuItem('Beef Steak', steak))
    container.appendChild(createMenuItem('Breakfast Set', breakfast))

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
