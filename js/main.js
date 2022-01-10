var elResultHeading = document.querySelector(".heading");

alert(
  "XO'SH KELIBSIZ, Alisher! \nBorish-kelish samalyot bileti - $500 \nMehmonxona to'lovi - $250 \nMuzey va ko'ngilochar joylar uchun - €120 "
);

var aviaTicket = 500;
var hotelPrice = 250;
var entertainmentPrice = 120;

var aviaSum = Math.round(aviaTicket * 9433.34);
var hotelSum = Math.round(hotelPrice * 9433.34);
var entertainmentSum = Math.round(entertainmentPrice * 10354.03);

var totalSum = aviaSum + hotelSum + entertainmentSum;

console.log("Umumiy Xarajatlar: " + totalSum);

var userBudget = Number(prompt("Mablag'ingizni kiriting:", "0 so'm"));

if (userBudget >= totalSum) {
  elResultHeading.textContent = "Oq yo'l, Alisher! Safaringiz yaxshi o'sin!";
} else {
  elResultHeading.textContent =
    "Alisher, mablag'ingiz yetarli emas, ozgina sabr qilish kerak bo'lar ekan.";
}
