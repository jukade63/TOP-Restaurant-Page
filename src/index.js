import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import createNavBar from "./navbar";
import loadContact from "./contact";
import createFooter from "./footer";


function setActiveTab(tab) {
  const activeTab = document.querySelector(".nav-content .active");
  if (activeTab) activeTab.classList.remove("active");
  tab.classList.add("active");
}
function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function initApp() {
  const content = document.getElementById("content");
  content.appendChild(createNavBar());
  content.appendChild(createMain());
  content.appendChild(createFooter())
  const homeTab = document.querySelector('.nav-content li')
  setActiveTab(homeTab)
  setUpNavbarControl()
  loadHome();

}

initApp();

function setUpNavbarControl() {
  const navbarTabs = document.querySelectorAll(".nav-content li");
  navbarTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      setActiveTab(e.target);
      if (e.target.textContent === "Home") {
        loadHome();
      } else if (e.target.textContent === "Menu") {
        loadMenu();
      } else if (e.target.textContent === "Contact") {
        loadContact();
      }
    });
  });
}
