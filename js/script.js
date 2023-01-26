const input = document.querySelector("input"),
  btn = document.querySelector(".btn"),
  read = document.querySelector(".read"),
  delBtn = document.querySelector(".fa-trash"),
  upBtn = document.querySelector(".fa-pen-to-square"),
  updateBtm = document.querySelector(".update");
let id = 1,
  upTest = false;
for (let i = 1; i <= localStorage.length; i++) {
  if (localStorage.getItem(`${i}`)) {
    let item = document.createElement("div");
    item.classList.add("item", `item__${i}`);
    item.innerHTML = `
    <span class="id">${i}</span>
    <span class="username">${
      JSON.parse(localStorage.getItem(`${i}`)).username
    }</span>
    <span class="bottons">
      <i class="fa-sharp fa-solid fa-trash"></i>
      <i class="fa-sharp fa-solid fa-pen-to-square"></i>
    </span>
    `;
    item.addEventListener("click", function (e) {
      //delete
      if (e.target.className == "fa-sharp fa-solid fa-trash") {
        this.remove();
        localStorage.removeItem(`${i}`);
        console.log(i);
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
  }
  id = i;
}
btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("Siz hech narsa kirtmadingiz!");
    // input.setAttribute('autofocus', '')
  } else {
    // localStorage.setItem(`${id}`, JSON.stringify({ username: `${input.value}))
    localStorage.setItem(
      `${id}`,
      JSON.stringify({ username: `${input.value}` })
    );
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
        localStorage.removeItem(`${id}`);
        console.log(id);
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
