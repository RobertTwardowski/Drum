const set = document.querySelectorAll("button");

const click = (e) => {
  let userClickedPattern = e.target.id;
  let audio = new Audio(`sounds/${userClickedPattern}.mp3`);
  audio.play();
  className(e);
};
const className = (e) => {
  let className = e.target.className;
  e.target.setAttribute("class", `${className} pressed`);

  setTimeout(() => {
    e.target.setAttribute("class", className);
  }, 100);
};

const press = (e) => {
  userClickedPattern = e.keyCode;

  set.forEach((e) => {
    let name = [e.id, e.className];
    let className = name.slice(1);
    let sliceName = String(className);
    if (sliceName.slice(0, 1) === String.fromCharCode(userClickedPattern)) {
      let sound = String(name.slice(0, 1));
      let audio = new Audio(`sounds/${sound}.mp3`);
      audio.play();
      e.classList.add("pressed");
      setTimeout(() => {
        e.classList.remove("pressed");
      }, 100);
    }
  });
};

set.forEach((btn) => {
  btn.addEventListener("click", click);
});

document.addEventListener("keypress", press);

