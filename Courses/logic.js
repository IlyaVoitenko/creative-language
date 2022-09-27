const coll = document.querySelectorAll(".collapsible");
const btnSend = document.querySelector(".btnSend");
const inputName = document.querySelector(".inputName");

const checkPrivacyPolicy = document.querySelector("#checkPrivacyPolicy");


for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

inputName.addEventListener("keydown", (e) => {
  if (e.key.match(/[0-9]/)) return e.preventDefault();
});

btnSend.addEventListener("click", () => {
  if (!checkPrivacyPolicy.checked) return;
  alert(true)
});

