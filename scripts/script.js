let inputRangeRed = 255,
  inputRangeGreen = 255,
  inputRangeBlue = 255,
  inputTextRed = 255,
  inputTextGreen = 255,
  inputTextBlue = 255;

let r = 255,
  g = 255,
  b = 255;

let rh = "ff",
  gh = "ff",
  bh = "ff";

let rgb = null;
let hexa = null;

window.addEventListener("load", () => {
  mapElements();
  sync();
});

function mapElements() {
  inputRangeRed = document.querySelector("#inputRangeRed");
  inputRangeGreen = document.querySelector("#inputRangeGreen");
  inputRangeBlue = document.querySelector("#inputRangeBlue");

  inputTextRed = document.querySelector("#inputTextRed");
  inputTextGreen = document.querySelector("#inputTextGreen");
  inputTextBlue = document.querySelector("#inputTextBlue");

  inputTextRgb = document.querySelector("#inputTextRgb");
  inputTextHexa = document.querySelector("#inputTextHexa");

  inputRangeRed.addEventListener("input", handleInputRangeChange);
  inputRangeGreen.addEventListener("input", handleInputRangeChange);
  inputRangeBlue.addEventListener("input", handleInputRangeChange);
}

function copy(clickedId) {
  let copyText = null;
  if (clickedId == "copyRgb") {
    copyText = document.getElementById("inputTextRgb");
  }
  if (clickedId == "copyHexa") {
    copyText = document.getElementById("inputTextHexa");
  }
  let message = document.getElementById("message");
  message.classList.add("show");

  let mensagem = document.getElementById("mensagem");
  mensagem.value = "Copied text: " + copyText.value;
  copyText.select();
  document.execCommand("copy");
}

function handleInputRangeChange(event) {
  const value = event.target.value;
  const id = event.target.id;
  switch (id) {
    case "inputRangeRed":
      r = value;
      rh = rgbToHex(parseInt(value));
      break;
    case "inputRangeGreen":
      g = value;
      gh = rgbToHex(parseInt(value));
      break;
    case "inputRangeBlue":
      b = value;
      bh = rgbToHex(parseInt(value));
      break;
  }
  sync();
}
const rgbToHex = (n) =>
  [n]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

function sync() {
  document.getElementById("body").style.backgroundColor = `rgb(${r} ${g} ${b})`;

  inputTextRed.value = r;
  inputTextGreen.value = g;
  inputTextBlue.value = b;

  let rgbToHex = (r) =>
    [r]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");

  rgb = `${r},${g},${b}`;
  hexa = `#${rh}${gh}${bh}`;
  inputTextRgb.value = rgb;
  inputTextHexa.value = hexa;
}
