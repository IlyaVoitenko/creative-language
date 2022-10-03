const coll = document.querySelectorAll(".collapsible");
const btnSend = document.querySelector(".btnSend");
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


//
