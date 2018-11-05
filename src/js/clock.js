const clock = document.querySelector(".js-clock .clock__text");

function getTimeHangul(hours, minutes, seconds) {
  const now = new Date();
  let time;
  // const hours = now.getHours();
  // const minutes = now.getMinutes();
  // const seconds = now.getSeconds();
  switch (parseInt(now.getHours() / 12)) {
    case 0:
      time = "오전 ";
      break;
    case 1:
      time = "오후 ";
  }

  switch (now.getHours() % 12) {
    case 0:
      time += "영";
      break;
    case 1:
      time += "한";
      break;
    case 2:
      time += "두";
      break;
    case 3:
      time += "세";
      break;
    case 4:
      time += "네";
      break;
    case 5:
      time += "다섯";
      break;
    case 6:
      time += "여섯";
      break;
    case 7:
      time += "일곱";
      break;
    case 8:
      time += "여덟";
      break;
    case 9:
      time += "아홉";
      break;
    case 10:
      time += "열";
      break;
    case 11:
      time += "열한";
      break;
    case 12:
      time += "열두";
      break;
  }

  time += "시 ";

  switch (parseInt(now.getMinutes() / 10)) {
    case 1:
      time += "십";
      break;
    case 2:
      time += "이십";
      break;
    case 3:
      time += "삼십";
      break;
    case 4:
      time += "사십";
      break;
    case 5:
      time += "오십";
      break;
    case 6:
      time += "육십";
  }

  switch (now.getMinutes() % 10) {
    case 1:
      time += "일";
      break;
    case 2:
      time += "이";
      break;
    case 3:
      time += "삼";
      break;
    case 4:
      time += "사";
      break;
    case 5:
      time += "오";
      break;
    case 6:
      time += "육";
      break;
    case 7:
      time += "칠";
      break;
    case 8:
      time += "팔";
      break;
    case 9:
      time += "구";
  }

  if (now.getMinutes() == 0) {
    time += "영";
  }

  time += "분 ";

  switch (parseInt(now.getSeconds() / 10)) {
    case 1:
      time += "십";
      break;
    case 2:
      time += "이십";
      break;
    case 3:
      time += "삼십";
      break;
    case 4:
      time += "사십";
      break;
    case 5:
      time += "오십";
      break;
    case 6:
      time += "육십";
  }

  switch (now.getSeconds() % 10) {
    case 1:
      time += "일";
      break;
    case 2:
      time += "이";
      break;
    case 3:
      time += "삼";
      break;
    case 4:
      time += "사";
      break;
    case 5:
      time += "오";
      break;
    case 6:
      time += "육";
      break;
    case 7:
      time += "칠";
      break;
    case 8:
      time += "팔";
      break;
    case 9:
      time += "구";
  }
  if (now.getSeconds() == 0) {
    time += "영";
  }

  time += "초";

  clock.innerHTML = time;
  return;
}

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = `
    ${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}
  `;
  clock.innerHTML = time;
  return;
}

function init() {
  getTimeHangul();
  setInterval(getTimeHangul, 1000);
  return;
}

init();
