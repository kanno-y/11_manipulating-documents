const ul = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

// Function
function addList() {
  const inputVal = input.value;
  input.value = "";

  // ３つの要素を作成
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  li.appendChild(span);
  li.appendChild(deleteBtn);

  span.textContent = inputVal;
  deleteBtn.textContent = "削除";

  // リストの子に追加
  ul.appendChild(li);

  deleteBtn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  input.focus();
}

btn.addEventListener("click", addList);
