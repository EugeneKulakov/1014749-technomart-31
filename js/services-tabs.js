const services = document.querySelector(".services");
const servicesLinks = services.querySelectorAll(".services__link");
const servicesTabs = services.querySelectorAll(".services__tab");

const deleteActiveClass = () => {
  servicesLinks.forEach((link) => {
    link.classList.remove("services__link--current");
  });
  servicesTabs.forEach((tab) => {
    tab.classList.remove("services__tab--current");
  });
};

servicesLinks.forEach((link, index) => {
  link.addEventListener("click", (evt) => {
    evt.preventDefault();
    deleteActiveClass();
    link.classList.add("services__link--current");
    servicesTabs[index].classList.add("services__tab--current");
  });
});
