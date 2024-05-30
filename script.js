const a = document.querySelector(".plus");
const b = document.querySelector(".moins");
const c = document.querySelector(".poub");
const d = document.querySelector(".btnlike");
const e = document.querySelector("span");



a.addEventListener("click", function () {
  parseInt(
    a.parentElement.previousElementSibling.previousElementSibling.innerHTML++
  );
  var currentValue = parseInt(a.parentElement.previousElementSibling.innerHTML);

  currentValue += 2000;

  a.parentElement.previousElementSibling.innerHTML = currentValue;

  e.innerHTML = currentValue;
});

b.addEventListener("click", function () {
  if (b.parentElement.previousElementSibling.innerHTML >= 1) {
    parseInt(
      b.parentElement.previousElementSibling.previousElementSibling.innerHTML--
    );
    parseInt((b.parentElement.previousElementSibling.innerHTML -= 2000));
    e.innerHTML -= 2000;
  }
});
c.addEventListener("click", function () {
  c.parentElement.parentElement.remove();
  e.innerHTML = 0;
});

function btnclicked() {
  d.style.color = "red";
}
