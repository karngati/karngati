const resultField = document.querySelector('.resultField');
const howMany = document.querySelector('.howMany');
const requestAdd = document.querySelector('.requestAdd');
const requestReset = document.querySelector('.requestReset');
const requestCopy = document.querySelector('.requestCopy');
const minSyllable = document.querySelector(".mynSyllable");
const maxSyllable = document.querySelector(".maxSyllable");

howMany.focus();

function setSyllable() {
  let min = minSyllable.value();
  let max = maxSyllable.value();
}

function addResult() {
  let times = howMany.value;
  for (let i = 0; i < times; i++) {
    resultField.value += genWord(2) + "\n";
    resultField.rows++;
  }
}

function genWord(syllableNumber) {
  let word = "";
  for (let i = 0; i < syllableNumber; i++) {
    word = genSyl() + word;
  }
  return word;
}

function genSyl() {
  let syllable = genCoda();
  syllable = genV() + syllable;
  syllable = genOnset() + syllable;
  return syllable;
}

function genCoda() {
  let rand = Math.floor(Math.random() * 12);
  if (rand < 3) {
    return "";
  } else if (rand < 6) {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
      return "m";
    } else if (rand === 1) {
      return "n";
    } else if (rand === 2) {
      return "ŋ";
    }
  } else if (rand < 9) {
    rand = Math.floor(Math.random() * 3);
    if (rand === 0) {
      return "p";
    } else if (rand === 1) {
      return "t";
    } else if (rand === 2) {
      return "k";
    }
  } else if (rand < 11) {
    return "y";
  } else {
    return "l";
  }
}

function genV() {
  let rand = Math.floor(Math.random() * 4);
  let vowel;
  if (rand < 1) {
    vowel = "a";
  } else if (rand < 2) {
    vowel = "e";
  } else if (rand < 3) {
    vowel = "o";
  } else {
    vowel = "i";
  }
  if (Math.random() * 3 < 1) {
    vowel += vowel;
  }
  return vowel;
}

function genOnset() {
  let rand = Math.floor(Math.random() * 18);
  if (rand < 1) {
    return "";
  } else if (rand < 2) {
    return "m";
  } else if (rand < 3) {
    return "n";
  } else if (rand < 4) {
    return "ŋ";
  } else if (rand < 5) {
    return "p";
  } else if (rand < 6) {
    return "t";
  } else if (rand < 7) {
    return "c";
  } else if (rand < 8) {
    return "k";
  } else if (rand < 9) {
    return "b";
  } else if (rand < 10) {
    return "d";
  } else if (rand < 11) {
    return "j";
  } else if (rand < 12) {
    return "g";
  } else if (rand < 13) {
    return "s";
  } else if (rand < 14) {
    return "x";
  } else if (rand < 15) {
    return "r";
  } else if (rand < 16) {
    return "h";
  } else if (rand < 17) {
    return "l";
  } else {
    return "y";
  }
}

requestAdd.addEventListener('click', addResult);

function deleteResult() {
  let answer = confirm("生成履歴を削除しますか？");
  if (answer) {
    resultField.value = "";
    resultField.rows = 1;
  }
}

requestReset.addEventListener('click', deleteResult);

function copyResult() {
  resultField.select();
  document.execCommand("copy");
  alert("copied");
}

requestCopy.addEventListener('click', copyResult);