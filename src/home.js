function createHome(){
    const home = document.createElement('section')
    const header = document.createElement('h1')
    const day = document.createElement('p')
    const time = document.createElement('p')
    const reserveBtn = document.createElement('button')

    home.classList.add("home")
    header.textContent = "OPEN"
    home.appendChild(header)

    day.textContent = "Mon - Sat"
    home.appendChild(day)

    time.textContent = "9.00 AM - 22.00 PM"
    home.appendChild(time)

    reserveBtn.textContent = "Reserve a table"
    home.appendChild(reserveBtn)

    return home

}

function loadHome(){
    const main = document.querySelector('.main')
    main.textContent = ""
    main.appendChild(createHome())
}

export default loadHome