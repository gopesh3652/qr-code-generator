const imgBox = document.getElementById("img-box");
const qrImg = document.getElementById("qr-image");
const inputText = document.getElementById("input-text");

function generateQR() {
  if (inputText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      inputText.value;

    imgBox.classList.add("show-img");
  } else {
    inputText.classList.add("error");

    setTimeout(() => {
      inputText.classList.remove("error");
    }, 1000);
  }
}
