import "./navigation.css";

export default {
  destination: "",
  // currentPage: "",
  activeLink: "",

  creatLinks(destination, elements) {
    this.destination = destination;
    destination.innerHTML = navigationListMarkup(elements);
    const activeLink = destination.querySelector("[data-navigationlink]");
    activeLink.classList.add("activeLink");
    this.activeLink = activeLink;
    // this.currentPage = activeLink.dataset.navigationlink;
  },

  getActiveLink(e) {
    e.preventDefault();
    if (e.target.nodeName === "LI" || e.target.nodeName === "A") {
      const dataAtribute = e.target.dataset.navigationlink
        ? e.target.dataset.navigationlink
        : e.target.closest("[data-navigationlink]").dataset.navigationlink;
      this.setActiveLink(dataAtribute);
      return dataAtribute;
    }
  },

  setActiveLink(dataAtribute) {
    console.log(this.destination);
    this.activeLink.classList.remove(".activeLink");
    const target = this.destination.querySelector(
      `[data-navigationlink=${dataAtribute}]`
    );
    target.classList.add("activeLink");
    console.log(target);
  },
};

const navigation = (destination, elements) => {
  const navigationListMarkup = (elements) => {
    return `
    <ul class="navigation">
    ${navigationListItemMarkup(elements)}
    </ul>
    `;
  };

  const navigationListItemMarkup = (elements) => {
    return elements.reduce((acc, element) => {
      acc += `
      <li class="navigationListItem" data-navigationlink="${element}">
      <a href="#">${element}</a>
      </li>`;
      return acc;
    }, "");
  };
  destination.innerHTML = navigationListMarkup(elements);
};

export default navigation;
