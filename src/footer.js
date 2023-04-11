function createFooter(){
    const footer = document.createElement('footer')
    footer.classList.add('footer')

    const address = document.createElement("p");
    address.textContent = "@ 7616 West Thomas St. Mcallen, TX 78501";
    footer.appendChild(address)

    const phone = document.createElement("p");
    phone.innerHTML = "&phone; (902) 788-9324";
    footer.appendChild(phone)

    return footer
}

export default createFooter