const input = document.querySelector("input"),
  btn = document.querySelector(".btn"),
  read = document.querySelector(".read"),
  delBtn = document.querySelector(".fa-trash"),
  upBtn = document.querySelector(".fa-pen-to-square"),
  updateBtm = document.querySelector(".update");
let id = 1,
  upTest = false;
btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Siz hech narsa kirtmadingiz!");
    // input.setAttribute('autofocus', '')
  } else {
    localStorage
      .setItem
      // `${id}`,
      // JSON.stringify({ username: `${input.value}` })
      ();
    let item = document.createElement("div");
    item.classList.add("item", `item__${id}`);
    item.innerHTML = `
  <span class="id">${id}</span>
  <span class="username">${input.value}</span>
  <span class="bottons">
    <i class="fa-sharp fa-solid fa-trash"></i>
    <i class="fa-sharp fa-solid fa-pen-to-square"></i>
  </span>
  `;
    item.addEventListener("click", function (e) {
      //delete
      if (e.target.className == "fa-sharp fa-solid fa-trash") {
        this.remove();
      }
      // update
      else if (e.target.className == "fa-sharp fa-solid fa-pen-to-square") {
        let value = item.childNodes[3].textContent;
        input.value = value;
        btn.style.display = "none";
        updateBtm.style.display = "block";
        updateBtm.addEventListener("click", function () {
          item.childNodes[3].innerHTML = input.value;
          input.value = "";
          this.style.display = "none";
          btn.style.display = "block";
        });
      }
    });
    read.appendChild(item);
    id++;
    input.value = "";
  }
});
// const obj = { name: "Mansurbek", age: 19 };
// localStorage.setItem("1", JSON.stringify(obj));
// console.log(localStorage.getItem("1"));
