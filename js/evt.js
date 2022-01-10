var elSurveyForm = document.querySelector(".survey__form");
var elSurveyInput = elSurveyForm.querySelector(".survey__input");
var elSurveyResultBox = elSurveyForm.querySelector(".survey__result");

var aviaTicketUSD = 500;
var hotelPriceUSD = 250;
var entertainmentPriceEURO = 120;

var USD_TO_SUM = 9433.34;
var EURO_TO_SUM = 10354.03;

var totalPrice =
  aviaTicketUSD * USD_TO_SUM +
  hotelPriceUSD * USD_TO_SUM +
  entertainmentPriceEURO * EURO_TO_SUM;

elSurveyForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var surveyInput = Number(elSurveyInput.value.trim());

  if (isNaN(surveyInput)) {
    elSurveyResultBox.textContent = "Raqam kiriting.";
    return;
  }

  // Validate Alisher's budget
  if (totalPrice <= surveyInput) {
    elSurveyResultBox.textContent =
      "Oq yo'l, Alisher! Safaringiz yaxshi o'sin!";
  } else {
    elSurveyResultBox.textContent =
      "Alisher, mablag'ingiz yetarli emas, ozgina sabr qilish kerak bo'lar ekan.";
  }
});
