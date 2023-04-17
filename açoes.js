const btn = document.getElementById("btn");
const secaoQuem = document.getElementById("quem");

btn.addEventListener("click", () => {
  if (secaoQuem.style.width === "30%") {
    secaoQuem.style.width = "10%";
    btn.style.left = "110%";
  } else {
    secaoQuem.style.width = "30%";
    btn.style.left = "160%";
  }
});





