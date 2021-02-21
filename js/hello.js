const form = document.querySelector(".form"),
  input = form.querySelector("input"),
  hello = document.querySelector(".hello");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
  e.preventDefault();
  const currnetValue = input.value;
  if (currnetValue !== "") {
    paintName(currnetValue);
    saveName(currnetValue);
  } else {
    alert("이름을 입력하지 않았습니다.");
  }
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintName(text) {
  form.classList.remove(SHOWING_CN);
  hello.classList.add(SHOWING_CN);
  hello.innerText = `안녕하세요 ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintName(currentUser);
  }
}

function init() {
  loadName();
}

init();
