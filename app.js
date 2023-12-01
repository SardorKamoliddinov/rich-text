const buttons = document.querySelectorAll("button");
textField.document.designMode = "On";

function myFunction() {
  let copied = (document.querySelector("#copied").innerHTML = "Copied");
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let cmd = buttons[i].getAttribute("data-cmd");
    textField.document.execCommand(cmd, false, null);
    if (buttons[i].name === "active") {
      buttons[i].classList.toggle("active");
    }
  });
}
