const clockContainer = document.querySelector(".clock"),
  clockTitle = clockContainer.querySelector(".clockTitle");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  const sec = date.getSeconds();
  clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
