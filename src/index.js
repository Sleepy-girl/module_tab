import navigation from "./components/navigation";
import "./styles.css";

const elements = ["Home", "About", "Contacts", "Products"];
// conts sidebar = ['TV','Toys','Weapon','Tools';]

const headerNavigation = document.querySelector(".headerNavigation");
// const sidebarNavigstion = document.querySelector('.sidebar');

const getPage = (e) => {
  const link = navigation.getActiveLink(e);
  console.log(link);
  console.log(navigation.activeLink);
};

navigation.creatLinks(headerNavigation, elements);
headerNavigation.addEventListener("click", getPage);
