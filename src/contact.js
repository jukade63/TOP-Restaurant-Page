import facebookIcon from '../images/facebook.svg'
import twitterIcon from '../images/twitter.svg'
import instagramIcon from '../images/instagram.svg'
import foursquareIcon from '../images/foursquare.svg'


function createContact() {
  const contact = document.createElement("section");
  contact.classList.add("contact");

  const header = document.createElement("h1");
  header.textContent = "Contact us";
  contact.appendChild(header);

  const info = document.createElement("div");
  info.classList.add("info");

  const addressTitle = document.createElement("h2");
  addressTitle.textContent = "Email";
  info.appendChild(addressTitle);
  const email = document.createElement("p");
  email.textContent = "cadawe-none19@outlook.com";
  info.appendChild(email);

  const phoneTitle = document.createElement("h2");
  phoneTitle.textContent = "Phone";
  info.appendChild(phoneTitle);
  const phone = document.createElement("p");
  phone.innerHTML = "&phone; (902) 788-9324";
  info.appendChild(phone);

  contact.appendChild(info);
  const social = document.createElement("div");
  social.classList.add('social')
  const facebook = new Image()
  const twitter = new Image()
  const instagram = new Image()
  const foursquare = new Image()
  facebook.src = facebookIcon
  twitter.src = twitterIcon
  instagram.src = instagramIcon
  foursquare.src = foursquareIcon
  social.appendChild(facebook)
  social.appendChild(foursquare)
  social.appendChild(twitter)
  social.appendChild(instagram)

contact.appendChild(social)

  return contact;
}

function loadContact() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
