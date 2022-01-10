var elResultHeading = document.querySelector(".heading");

alert(
  "XO'SH KELIBSIZ, Alisher! \nBorish-kelish samalyot bileti - $500 \nMehmonxona to'lovi - $250 \nMuzey va ko'ngilochar joylar uchun - €120 "
);

var aviaTicketUSD = 500;
var hotelPriceUSD = 250;
var entertainmentPriceEURO = 120;

var USD_TO_SUM = 9433.34;
var EURO_TO_SUM = 10354.03;

var totalPrice =
  aviaTicketUSD * USD_TO_SUM +
  hotelPriceUSD * USD_TO_SUM +
  entertainmentPriceEURO * EURO_TO_SUM;

console.log("Umumiy xarajat: " + Math.round(totalPrice) + " so'm");

// AVOID MAGIC NUMBERS !!!

// var aviaSum = Math.round(aviaTicket * 9433.34);
// var hotelSum = Math.round(hotelPrice * 9433.34);
// var entertainmentSum = Math.round(entertainmentPrice * 10354.03);

// var totalSum = aviaSum + hotelSum + entertainmentSum;

// console.log("Umumiy Xarajatlar: " + totalSum);

var userBudget = Number(prompt("Mablag'ingizni kiriting:", "0 so'm"));

// Validate Alisher's budget
if (totalPrice <= userBudget) {
  elResultHeading.textContent = "Oq yo'l, Alisher! Safaringiz yaxshi o'sin!";
} else {
  elResultHeading.textContent =
    "Alisher, mablag'ingiz yetarli emas, ozgina sabr qilish kerak bo'lar ekan.";
}
