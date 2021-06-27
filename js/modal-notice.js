const cards = document.querySelector(".cards");
const notice = document.querySelector(".modal-notice");
const noticeButtonClose = notice.querySelector(".modal-notice__close");
const noticeButtonOrder = notice.querySelector(".modal-notice__order");
const noticeButtonNext = notice.querySelector(".modal-notice__button");
const cart = document.querySelector(".user-controls__link--cart");
const cartValue = cart.querySelector("span");

const handleNoticeClose = (evt) => {
  evt.preventDefault();
  notice.classList.remove("modal--show", "modal-animation");
  noticeButtonClose.removeEventListener("click", handleNoticeClose);
  noticeButtonOrder.removeEventListener("click", handleNoticeClose);
  noticeButtonNext.removeEventListener("click", handleNoticeClose);
};

const handleNoticeShow = (evt) => {
  evt.preventDefault();
  if (evt.target.className === "card__buy") {
    notice.classList.add("modal--show", "modal-animation");
    noticeButtonClose.addEventListener("click", handleNoticeClose);
    noticeButtonOrder.addEventListener("click", handleNoticeClose);
    noticeButtonNext.addEventListener("click", handleNoticeClose);
    cart.classList.contains("user-controls__link--filled") ||
      cart.classList.add("user-controls__link--filled");
    ++cartValue.textContent;
  }
};

cards.addEventListener("click", handleNoticeShow);
