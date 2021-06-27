const feedbackButtonShow = document.querySelector(".about__button--for-modal");
const feedback = document.querySelector(".modal-feedback");
const feedbackButtonClose = feedback.querySelector(".modal-feedback__close");
const feedbackInput = feedback.querySelector(".modal-feedback__input");
const feedbackForm = feedback.querySelector(".modal-feedback__form");
const feedbackSubmitButton = feedback.querySelector(".modal-feedback__button");
const feedbackWrap = feedback.querySelector(".modal-feedback__wrap");

const handleFeedbackClose = () => {
  feedback.classList.remove("modal--show");
  feedbackWrap.classList.remove("modal-animation", "error");
  feedbackButtonClose.removeEventListener("click", handleFeedbackClose);
  feedbackSubmitButton.removeEventListener("click", handleFeedbackSubmit);
};

const handleFeedbackEscapeClose = (evt) => {
  if (evt.key === "Esc" || evt.key === "Escape") {
    handleFeedbackClose();
    window.removeEventListener("keydown", handleFeedbackEscapeClose);
  }
};

const handleFeedbackSubmit = () => {
  feedbackInput.value = feedbackInput.value.trim();
  if (feedbackForm.checkValidity()) {
    handleFeedbackEscapeClose();
    return;
  }
  feedbackWrap.classList.remove("error");
  feedbackWrap.offsetWidth;
  feedbackWrap.classList.add("error");
};

const handleFeedbackShow = (evt) => {
  evt.preventDefault();
  feedback.classList.add("modal--show");
  feedbackWrap.classList.add("modal-animation");
  feedbackInput.focus();
  feedbackButtonClose.addEventListener("click", handleFeedbackClose);
  window.addEventListener("keydown", handleFeedbackEscapeClose);
  feedbackSubmitButton.addEventListener("click", handleFeedbackSubmit);
};

feedbackButtonShow.addEventListener("click", handleFeedbackShow);
