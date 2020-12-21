$(document).ready(function () {
  $(".title").attr({
    "data-aos": "zoom-in",
    "data-aos-duration": "2000"
  });
  setTimeout(() => {
    AOS.init();
  }, 120);
});
const sounds = ["Rebirth"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();

    document.getElementById(sound).play();
  });

  document.querySelector("#buttons").appendChild(btn);
});

function stopSounds() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}