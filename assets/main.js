const btnShowPosts = document.querySelectorAll(".buttonShow");
const coll = document.querySelectorAll(".collapsible");
const inputName = document.querySelector(".inputName");
const btnSend = document.querySelector(".btnSend");
const checkPrivacyPolicy = document.querySelector("#checkPrivacyPolicy");

Array.from(btnShowPosts).forEach((b) => {
  b.addEventListener("click", showEleements(".hidden", btnShowPosts, 4));
});

function showEleements(item, btn, amauntShowElements) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      let showPerClick = amauntShowElements;
      const post = this.parentNode.querySelectorAll(item);

      for (let i = 0; i < showPerClick; i++) {
        if (!post[i]) return (this.outerHTML = "");
        post[i].classList.add("box");
        post[i].classList.remove("hidden");
      }
    });
  }
}

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    console.log("coll[i] :", coll[i]);

    this.classList.toggle("active");
    var content = this.nextElementSibling;
    console.log("content :", content);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

inputName.addEventListener("keydown", (e) => {
  console.log("inputName :", e);
  if (e.key.match(/[0-9]/)) return e.preventDefault();
});
btnSend.addEventListener("click", () => {
  if (!checkPrivacyPolicy.checked) return;
});
