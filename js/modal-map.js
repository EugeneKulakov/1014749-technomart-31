const mapLinkShow = document.querySelector(".about__map");
const map = document.querySelector(".modal-map");
const mapButtonClose = map.querySelector(".modal-map__close");

const handleMapClose = () => {
  map.classList.remove("modal--show", "modal-animation");
  mapButtonClose.removeEventListener("click", handleMapClose);
};

const handleMapEscapeClose = (evt) => {
  if (evt.key === "Esc" || evt.key === "Escape") {
    handleMapClose();
    window.removeEventListener("keydown", handleMapEscapeClose);
  }
};

const handleMapShow = (evt) => {
  evt.preventDefault();
  map.classList.add("modal--show", "modal-animation");
  mapButtonClose.addEventListener("click", handleMapClose);
  window.addEventListener("keydown", handleMapEscapeClose);
};

mapLinkShow.addEventListener("click", handleMapShow);
