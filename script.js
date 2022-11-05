const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");

const crash = () => {
  const crash = new Audio("sounds/crash.mp3");
  crash.play();
  wAdd();
};
const wAdd = () => {
  w.classList.add("pressed");
  setTimeout(() => {
    w.classList.remove("pressed");
  }, 100);
};
const kickBass = () => {
  const kickBass = new Audio("sounds/kick-bass.mp3");
  kickBass.play();
  aAdd();
};
const aAdd = () => {
  a.classList.add("pressed");
  setTimeout(() => {
    a.classList.remove("pressed");
  }, 100);
};
const snare = () => {
  const snare = new Audio("sounds/snare.mp3");
  snare.play();
  sAdd();
};
const sAdd = () => {
  s.classList.add("pressed");
  setTimeout(() => {
    s.classList.remove("pressed");
  }, 100);
};
const tomOne = () => {
  const tomOne = new Audio("sounds/tom-1.mp3");
  tomOne.play();
  dAdd();
};
const dAdd = () => {
  d.classList.add("pressed");
  setTimeout(() => {
    d.classList.remove("pressed");
  }, 100);
};
const tomTwo = () => {
  const tomTwo = new Audio("sounds/tom-2.mp3");
  tomTwo.play();
  jAdd();
};
const jAdd = () => {
  j.classList.add("pressed");
  setTimeout(() => {
    j.classList.remove("pressed");
  }, 100);
};
const tomThree = () => {
  const tomThree = new Audio("sounds/tom-3.mp3");
  tomThree.play();
  kAdd();
};
const kAdd = () => {
  k.classList.add("pressed");
  setTimeout(() => {
    k.classList.remove("pressed");
  }, 100);
};
const tomFour = () => {
  const tomFour = new Audio("sounds/tom-4.mp3");
  tomFour.play();
};
const lAdd = () => {
  l.classList.add("pressed");
  setTimeout(() => {
    l.classList.remove("pressed");
  }, 100);
};
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 119) {
    crash();
    wAdd();
  }
});

document.addEventListener("keypress", (e) => {
  if (e.keyCode == 97) {
    kickBass();
    aAdd();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 115) {
    snare();
    sAdd();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 100) {
    tomOne();
    dAdd();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 106) {
    tomTwo();
    jAdd();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 107) {
    tomThree();
    kAdd();
  }
});
document.addEventListener("keypress", (e) => {
  if (e.keyCode == 108) {
    tomFour();
    lAdd();
  }
});

w.addEventListener("click", crash);
a.addEventListener("click", kickBass);
s.addEventListener("click", snare);
d.addEventListener("click", tomOne);
j.addEventListener("click", tomTwo);
k.addEventListener("click", tomThree);
l.addEventListener("click", tomFour);
