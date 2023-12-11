const form = document.querySelector("#form");
const resultDiv = document.querySelector("#result-div");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const targetForm = e.target;
  const eur = targetForm.eur.value;
  const gbp = eur * 0.86;
  resultDiv.innerHTML = `<p>Oggi, ${eur} euro valgono ${gbp} dollari!</p>`;
});
const form2 = document.querySelector("#form2");
const resultDiv2 = document.querySelector("#result-div2");
form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const targetForm = e.target;
  const gbp = targetForm.gbp.value;
  const eur = gbp / 0.86;
  resultDiv2.innerHTML = `<p>Oggi, ${gbp} sterline valgono ${eur} euro!</p>`;
});
