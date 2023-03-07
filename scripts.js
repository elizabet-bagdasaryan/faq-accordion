const questions1 = document.getElementById("questions1");
const questions2 = document.getElementById("questions2");
const questions3 = document.getElementById("questions3");
const questions4 = document.getElementById("questions4");
const questions5 = document.getElementById("questions5");

questions1.addEventListener("click", function () {
  questions1.classList.toggle("active");
  questions5.classList.remove("active");
  questions2.classList.remove("active");
  questions3.classList.remove("active");
  questions4.classList.remove("active");
});

questions2.addEventListener("click", function () {
  questions2.classList.toggle("active");
  questions1.classList.remove("active");
  questions5.classList.remove("active");
  questions3.classList.remove("active");
  questions4.classList.remove("active");
});

questions3.addEventListener("click", function () {
  questions3.classList.toggle("active");
  questions1.classList.remove("active");
  questions2.classList.remove("active");
  questions5.classList.remove("active");
  questions4.classList.remove("active");
});

questions4.addEventListener("click", function () {
  questions4.classList.toggle("active");
  questions1.classList.remove("active");
  questions2.classList.remove("active");
  questions3.classList.remove("active");
  questions5.classList.remove("active");
});

questions5.addEventListener("click", function () {
  questions5.classList.toggle("active");
  questions1.classList.remove("active");
  questions2.classList.remove("active");
  questions3.classList.remove("active");
  questions4.classList.remove("active");
});
