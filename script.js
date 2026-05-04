let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let text = document.getElementById("text");
let image = document.getElementById("image");

let noClicks = 0;

let messages = ["No", "Are you sure?", "G NA", "Ulul"];

noBtn.onclick = function () {
  noClicks++;

  // change text
  noBtn.innerText = messages[Math.min(noClicks, messages.length - 1)];

  // make YES button bigger each time
  let size = 16 + noClicks * 5;
  yesBtn.style.fontSize = size + "px";
  yesBtn.style.padding = (10 + noClicks * 2) + "px";

  // optional: loop message if it goes past
  if (noClicks > messages.length) {
    noBtn.innerText = "Ulul";
  }
};

yesBtn.onclick = function () {
  image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPp84BCV5W8qob89HmAXo394fBj2kElFBOQ&s"
  text.innerText = "G open 🎉";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
};
