import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import createNavBar from "./navbar";


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
      }
    });
  });
}
