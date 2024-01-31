let answer;
let state = true; // true = 解答未表示, false = 解答表示済み 
document.addEventListener('keydown', (e) => { if (!e.repeat) keydown_event(e) })

const showAnswerBtn = "<input type='button' id='showAnswer' value='show answer' onclick='pushShowAnswer()'>";
const retryBtn = "<input type='button' id='retry' value='retry' onclick='pushRetry()'>";

const baseL = ["", " ribu", " juta", " miliar", " triliun"]
const baseS = ["puluh", "ratus"]
const atom = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"]
const atom2 = ["", "se", "dua ", "tiga ", "empat ", "lima ", "enam ", "tujuh ", "delapan ", "sembilan "]

function keydown_event(e) {
  if (e.keyCode === 32) {
    if (state) {
      showAnswer();
    } else {
      reflesh();
    }
  }
}

function under1000(num) {
  let s = [];
  if (num > 99) {
    s.push(atom2[Math.floor(num / 100)] + "ratus");
  }

  if (num > 9) {
    if (num % 100 > 19) {
      s.push(atom2[Math.floor((num % 100) / 10)] + "puluh");
    } else if (num % 100 > 10) {
      s.push(atom2[Math.floor(num % 10)] + "belas");
      return s;
    } else if (num % 100 == 10) {
      s.push("sepuluh");
      return s;
    }

    s.push(atom[num % 10]);
  }

  return s.join(" ");
}

function numToIn(num) {
  let s = [];
  for (let i = 0; i < Math.floor(Math.log10(num) / 3) + 1; i++) {
    s.unshift(under1000(Math.floor((num / 1000 ** i) % 1000)) + baseL[i]);
  }

  return s.join(" ");
}

//読み込み時またはretryボタンが押された時の処理
function reflesh() {
  answer = Math.floor(Math.random() * (10 ** 9));
  document.getElementById("question").innerHTML = answer.toLocaleString('de-DE');
  document.getElementById("answer").innerHTML = "";
  state = true;
}

function showAnswer() {
  document.getElementById("answer").innerHTML = numToIn(answer);
  state = false;
}

//ボタンを押したときの動作。blur()するようにしているけどもっと一般的な処理をしたい
function pushShowAnswer() {
  showAnswer();
  document.getElementById("showAnswer").blur();
}

function pushRetry() {
  reflesh();
  document.getElementById("retry").blur();
}