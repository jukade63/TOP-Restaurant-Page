function createNavBar(){
    const navbar = document.createElement('div')
    navbar.classList.add('navbar')

    const header = document.createElement('h1')
    header.textContent = "Deli Food"
    navbar.appendChild(header)

    const navContent = document.createElement('ul')
    navContent.classList.add('nav-content')
    const home = document.createElement('li')
    
    home.textContent = 'Home'
    const menu = document.createElement('li')
    menu.textContent = "Menu"
    const contact = document.createElement('li')
    contact.textContent = "Contact"
    
    navContent.appendChild(home)
    navContent.appendChild(menu)
    navContent.appendChild(contact)

    navbar.appendChild(navContent)

    return navbar
}

export default createNavBar