function solve() {
  const text = document.getElementById("input").value;

  let splitedText = text
    .split(".")
    .filter(x => x != "")
    .map(x => x + '.');

  let length = splitedText.length / 3;

  let result = document.getElementById("output");
  for (let i = 0; i < length; i++) {
    result.innerHTML += `<p>${splitedText.splice(0,3).join("")}</p>`;
  }

}