$(document).ready(function () {
  $(".title").attr({
    "data-aos": "zoom-in",
    "data-aos-duration": "200"
  });
  setTimeout(() => {
    AOS.init();
  }, 50);
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
    audio.volume = 0.5;
    audio.pause();
    audio.currentTime = 0;
  });
}